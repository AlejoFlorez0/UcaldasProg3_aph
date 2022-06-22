import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { TiposModel } from 'src/app/modelos/parametros/tipo.model';
import { TipoService } from 'src/app/servicios/parametros/tipo.service';
declare const MostrarMensaje:any;

@Component({
  selector: 'app-remover-tipo',
  templateUrl: './remover-tipo.component.html',
  styleUrls: ['./remover-tipo.component.css']
})
export class RemoverTipoComponent implements OnInit {
  id: number = 0;
  name: string = "";
  description: string = "";

  constructor(
    private router: Router,
    private servicio:  TipoService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.buscarDatos()
  }

  buscarDatos(){
    let id = this.route.snapshot.params["id"];
    this.servicio.ObtenerTipo(id).subscribe({
      next: (data: TiposModel) => {
        if(data.idTipoInmueble && data.nombre && data.descripcion){
        this.id = data.idTipoInmueble;
        this.name =data.nombre;
        this.description =data.descripcion;

        }
      }
    });
  }
  
  EliminarDatos(){
    this.servicio.EliminarTipo(this.id).subscribe({
      next: (data: any) =>{
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_ELIMINACION)
        this.router.navigate(["/parametros/listar-tipo/"])
      }
    })
  }
}