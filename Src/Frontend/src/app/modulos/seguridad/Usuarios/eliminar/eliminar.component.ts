import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { DatosUsuarioModel } from 'src/app/modelos/seguridad/usuario-data.model';
import { UsuarioService } from 'src/app/servicios/Seguridad/usuario.service';

declare const MostrarMensaje:any;

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  nroDocument: number = 0;
  primerNombre: string = "";
  segundoNombre: string = "";
  primerApellido: string ="";
  segundoApellido: string="";
  email: string = "";
  celular: string = "";
  rolId: number = 6;

  constructor(
    private router: Router,
    private servicio:  UsuarioService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.buscarDatos()
  }

  buscarDatos(){
    let id = this.route.snapshot.params["id"];
    this.servicio.ObtenerUsuario(id).subscribe({
      next: (data: DatosUsuarioModel) => {
        if(data.nroDocument && data.primerNombre && data.segundoNombre && data.primerApellido && data.segundoApellido && data.email && data.celular && data.rolId){
        this.nroDocument = data.nroDocument;
        this.primerNombre = data.primerNombre;
        this.segundoNombre = data.segundoNombre;
        this.primerApellido = data.primerApellido;
        this.segundoApellido = data.segundoApellido;
        this.email = data.email;
        this.celular = data.celular;
        this.rolId = data.rolId;
        }
      }
    });
  }
  
  EliminarDatos(){
    this.servicio.EliminarUsuario(this.nroDocument).subscribe({
      next: (data: any) =>{
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_ELIMINACION)
        this.router.navigate(["/seguridad/listar"])
      }
    })
  }

}
