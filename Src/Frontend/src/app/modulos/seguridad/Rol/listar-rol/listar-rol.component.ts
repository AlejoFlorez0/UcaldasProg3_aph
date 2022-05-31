import { Component, OnInit } from '@angular/core';
import { rolModel } from 'src/app/modelos/seguridad/rol.model';
import { RolService } from 'src/app/servicios/Seguridad/rol.service';

@Component({
  selector: 'app-listar-rol',
  templateUrl: './listar-rol.component.html',
  styleUrls: ['./listar-rol.component.css']
})
export class ListarRolComponent implements OnInit {

  listaRoles: rolModel[] = [
    {
      id: 1,
      nombre: "A",
      descripcion: "A"
    }];

  constructor(
    private servicio: RolService
  ) { }

  ngOnInit(): void {
    //this.ObtenerRoles();
  }

  ObtenerRoles() {
    this.servicio.ObtenerListaRoles().subscribe({
      next: (datos: rolModel[]) => {
        this.listaRoles = datos
      }
    });
  }
}
