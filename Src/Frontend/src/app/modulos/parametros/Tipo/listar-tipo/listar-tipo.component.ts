import { Component, OnInit } from '@angular/core';
import { TiposModel } from 'src/app/modelos/parametros/tipo.model';
import { TipoService } from 'src/app/servicios/parametros/tipo.service';

@Component({
  selector: 'app-listar-tipo',
  templateUrl: './listar-tipo.component.html',
  styleUrls: ['./listar-tipo.component.css']
})


export class ListarTipoComponent implements OnInit {

  listaTipos: TiposModel[] = [
    {
      id: 1,
      nombre: "A",
      descripcion: "A"
    }];

  constructor(
    private servicio: TipoService
  ) { }

  ngOnInit(): void {
    this.ObtenerTipo();
  }

  ObtenerTipo() {
    this.servicio.ObtenerListaTipo().subscribe({
      next: (datos: TiposModel[]) => {
        this.listaTipos = datos
      }
    });
  }
}
