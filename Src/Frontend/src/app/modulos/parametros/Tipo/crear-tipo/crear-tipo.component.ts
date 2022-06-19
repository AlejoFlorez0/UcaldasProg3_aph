import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { TiposModel } from 'src/app/modelos/parametros/tipo.model';
import { TipoService } from 'src/app/servicios/parametros/tipo.service';

declare const MostrarMensaje:any;
@Component({
  selector: 'app-crear-tipo',
  templateUrl: './crear-tipo.component.html',
  styleUrls: ['./crear-tipo.component.css']
})


export class CrearTipoComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private servicio:  TipoService
    ) { }

  ngOnInit(): void {
    this.CreacionDeFormularios()
  }

  CreacionDeFormularios(){
    this.dataForm = this.fb.group({
      name: ["",[Validators.required]],
      descripcion: ["",[Validators.required]]
    })
  }

  get getDF(){
    return this.dataForm.controls;
  }
  guardarDatos(){
    let tipo = new TiposModel();
    tipo.nombre = this.getDF["name"].value
    tipo.descripcion= this.getDF["descripcion"].value
    this.servicio.GuardarListaTipos(tipo).subscribe({
      next: (data: TiposModel) =>{
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_GUARDADO)
        this.router.navigate(["/parametros/crear-tipo"])
      }
    })
  }

}

