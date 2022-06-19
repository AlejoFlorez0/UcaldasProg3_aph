import { Component, OnInit } from '@angular/core';
import { SeccionModel } from 'src/app/modelos/parametros/seccion.model';
import { SeccionService } from 'src/app/servicios/parametros/seccion.service';


@Component({
  selector: 'app-listar-seccion',
  templateUrl: './listar-seccion.component.html',
  styleUrls: ['./listar-seccion.component.css']
})

export class ListarSeccionComponent implements OnInit {

  listasSeccion: SeccionModel[] = [
    {
      id: 1,
      nombre: "A",
      descripcion: "A"
    }];

  constructor(
    private servicio: SeccionService
  ) { }

  ngOnInit(): void {
    this.ObtenerSeccion();
  }

  ObtenerSeccion() {
    this.servicio.ObtenerListaSeccion().subscribe({
      next: (datos: SeccionModel[]) => {
        this.listasSeccion = datos
      }
    });
  }
}

