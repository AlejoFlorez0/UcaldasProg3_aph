import { Component, OnInit } from '@angular/core';
import { TiposModel } from 'src/app/modelos/parametros/tipo.model';
import { TipoService } from 'src/app/servicios/parametros/tipo.service';

@Component({
  selector: 'app-listar-tipo',
  templateUrl: './listar-tipo.component.html',
  styleUrls: ['./listar-tipo.component.css']
})
export class ListarTipoComponent implements OnInit {
  tipos: TiposModel[] = []

  constructor(private servicio: TipoService) { }

  ngOnInit(): void {
  }

  mostrarTipos() {
    this.servicio.ListaDeTipos().subscribe({ 
      next: (data: TiposModel[]) => { 
        this.tipos = data } })
  }



}
