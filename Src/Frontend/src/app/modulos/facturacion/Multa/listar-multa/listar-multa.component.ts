import { Component, OnInit } from '@angular/core';
import { MultaModel } from 'src/app/modelos/facturacion/multa.model';
import { MultaService } from 'src/app/Servicios/facturacion/multa.service';

@Component({
  selector: 'app-listar-multa',
  templateUrl: './listar-multa.component.html',
  styleUrls: ['./listar-multa.component.css']
})
export class ListarMultaComponent implements OnInit {

  listaRoles: MultaModel[] = [
    {
      id: 1,
      nombre: "A",
      descripcion: "A"
    }];

  constructor(
    private servicio: MultaService
  ) { }

  ngOnInit(): void {
    this.ObtenerRoles();
  }

  ObtenerRoles() {
    this.servicio.ObtenerListaMulta().subscribe({
      next: (datos: MultaModel[]) => {
        this.listaRoles = datos
      }
    });
  }

}
