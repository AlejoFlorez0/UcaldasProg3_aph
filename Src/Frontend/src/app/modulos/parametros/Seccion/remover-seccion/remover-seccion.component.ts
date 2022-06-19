import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { SeccionModel } from 'src/app/modelos/parametros/seccion.model';
import { SeccionService } from 'src/app/servicios/parametros/seccion.service';
declare const MostrarMensaje:any;


@Component({
  selector: 'app-remover-seccion',
  templateUrl: './remover-seccion.component.html',
  styleUrls: ['./remover-seccion.component.css']
})

export class RemoverSeccionComponent implements OnInit {
  id: number = 0;
  name: string = "";
  description: string = "";

  constructor(
    private router: Router,
    private servicio:  SeccionService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.buscarDatos()
  }

  buscarDatos(){
    let id = this.route.snapshot.params["id"];
    this.servicio.ObtenerSeccion(id).subscribe({
      next: (data: SeccionModel) => {
        if(data.id && data.nombre && data.descripcion){
        this.id = data.id;
        this.name =data.nombre;
        this.description =data.descripcion;

        }
      }
    });
  }
  
  EliminarDatos(){
    this.servicio.EliminarSeccion(this.id).subscribe({
      next: (data: any) =>{
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_ELIMINACION)
        this.router.navigate(["/parametros/listar-seccion"])
      }
    })
  }
}