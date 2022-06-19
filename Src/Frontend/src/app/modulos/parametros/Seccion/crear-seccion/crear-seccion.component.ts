import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { SeccionModel } from 'src/app/modelos/parametros/seccion.model';
import { SeccionService } from 'src/app/servicios/parametros/seccion.service';

declare const MostrarMensaje:any;
@Component({
  selector: 'app-crear-seccion',
  templateUrl: './crear-seccion.component.html',
  styleUrls: ['./crear-seccion.component.css']
})

export class CrearSeccionComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private servicio: SeccionService
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
    let model = new SeccionModel();
    model.nombre = this.getDF["name"].value
    model.descripcion= this.getDF["descripcion"].value
    this.servicio.GuardarListaSeccion(model).subscribe({
      next: (data: SeccionModel) =>{
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_GUARDADO)
        this.router.navigate(["/parametros/crear-seccion"])
      }
    })
  }

}

