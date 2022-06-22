import { Component, OnInit } from '@angular/core';
import { InmuebleModel } from 'src/app/modelos/parametros/inmueble.model';
import { InmuebleService } from 'src/app/servicios/parametros/inmueble.service';

@Component({
  selector: 'app-listar-inmueble',
  templateUrl: './listar-inmueble.component.html',
  styleUrls: ['./listar-inmueble.component.css']
})
export class ListarInmuebleComponent implements OnInit {

  listaRoles: InmuebleModel[] = [
    {
      idInmueble: 1,
      area: "Cuadrada",
      nroDocumentoPropietario: 0,
      nroDocumentoHabitante: 0,
      idTipoInmueble: 1,
      idSeccion: 1

    }];

  constructor(
    private servicio: InmuebleService
  ) { }

  ngOnInit(): void {
    this.ObtenerRoles();
  }

  ObtenerRoles() {
    this.servicio.ObtenerListaInmueble().subscribe({
      next: (datos: InmuebleModel[]) => {
        this.listaRoles = datos
      }
    });
  }

}
