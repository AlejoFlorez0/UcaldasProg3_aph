import { Component, OnInit } from '@angular/core';
import { DatosUsuarioModel } from 'src/app/modelos/seguridad/usuario-data.model';
import { UsuarioService } from 'src/app/servicios/Seguridad/usuario.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listaUsuarios: DatosUsuarioModel[] = [];

  constructor(
    private servicio: UsuarioService
  ) { }

  ngOnInit(): void {
    this.ObtenerRoles();
  }

  ObtenerRoles() {
    this.servicio.ObtenerListaUsuarios().subscribe({
      next: (datos: DatosUsuarioModel[]) => {
        this.listaUsuarios = datos
      }
    });
  }

}
