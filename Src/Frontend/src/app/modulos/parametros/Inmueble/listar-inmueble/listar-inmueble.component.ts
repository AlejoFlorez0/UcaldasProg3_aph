import { Component, OnInit } from '@angular/core';
import { inmuebleModel } from 'src/app/modelos/parametros/inmueble.model';

@Component({
  selector: 'app-listar-inmueble',
  templateUrl: './listar-inmueble.component.html',
  styleUrls: ['./listar-inmueble.component.css']
})
export class ListarInmuebleComponent implements OnInit {

listainmuebles: inmuebleModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
