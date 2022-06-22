import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { MultaModel } from 'src/app/modelos/facturacion/multa.model';
import { MultaService } from 'src/app/Servicios/facturacion/multa.service';

declare const MostrarMensaje:any;

@Component({
  selector: 'app-anular-multa',
  templateUrl: './anular-multa.component.html',
  styleUrls: ['./anular-multa.component.css']
})
export class AnularMultaComponent implements OnInit {

  id: number = 0;
  name: string = "";
  valor: number = 0;
  description: string = "";

  constructor(
    private router: Router,
    private servicio:  MultaService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.buscarDatos()
  }

  buscarDatos(){
    let id = this.route.snapshot.params["id"];
    this.servicio.ObtenerMulta(id).subscribe({
      next: (data: MultaModel) => {
        if(data.id && data.nombre && data.valor && data.descripcion){
        this.id = data.id;
        this.name =data.nombre;
        this.description =data.descripcion;

        }
      }
    });
  }
  
  EliminarDatos(){
    this.servicio.EliminarMulta(this.id).subscribe({
      next: (data: any) =>{
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_ELIMINACION)
        this.router.navigate(["/seguridad/listar-rol"])
      }
    })
  }

}
