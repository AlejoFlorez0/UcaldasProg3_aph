import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { rolModel } from 'src/app/modelos/seguridad/rol.model';
import { InmuebleService } from 'src/app/servicios/parametros/inmueble.service';

declare const MostrarMensaje:any;
@Component({
  selector: 'app-crear-inmuble',
  templateUrl: './crear-inmuble.component.html',
  styleUrls: ['./crear-inmuble.component.css']
})

export class CrearInmubleComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private servicio: InmuebleService
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
    let model = new rolModel();
    model.nombre = this.getDF["name"].value
    model.descripcion= this.getDF["descripcion"].value
    this.servicio.GuardarListaInmueble(model).subscribe({
      next: (data: rolModel) =>{
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_GUARDADO)
        this.router.navigate(["/parametros/crear-inmueble"])
      }
    })
  }

}
