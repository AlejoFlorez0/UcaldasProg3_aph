import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { rolModel } from 'src/app/modelos/seguridad/rol.model';
import { RolService } from 'src/app/servicios/Seguridad/rol.service';
declare const MostrarMensaje:any;

@Component({
  selector: 'app-remover-rol',
  templateUrl: './remover-rol.component.html',
  styleUrls: ['./remover-rol.component.css']
})
export class RemoverRolComponent implements OnInit {
  idRol: number = 0;
  name: string = "";
  description: string = "";

  constructor(
    private router: Router,
    private servicio:  RolService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.buscarDatos()
  }

  buscarDatos(){
    let id = this.route.snapshot.params["id"];
    this.servicio.ObtenerRol(id).subscribe({
      next: (data: rolModel) => {
        if(data.idRol && data.nombre && data.descripcion){
        this.idRol = data.idRol;
        this.name =data.nombre;
        this.description =data.descripcion;

        }
      }
    });
  }
  
  EliminarDatos(){
    this.servicio.EliminarRol(this.idRol).subscribe({
      next: (data: any) =>{
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_ELIMINACION)
        this.router.navigate(["/seguridad/listar-rol"])
      }
    })
  }
}