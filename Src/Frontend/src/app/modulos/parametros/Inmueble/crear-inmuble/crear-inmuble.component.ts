import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { InmuebleModel } from 'src/app/modelos/parametros/inmueble.model';
import { InmuebleService } from 'src/app/servicios/parametros/inmueble.service';

declare const MostrarMensaje: any;
@Component({
  selector: 'app-crear-inmuble',
  templateUrl: './crear-inmuble.component.html',
  styleUrls: ['./crear-inmuble.component.css']
})

export class CrearInmubleComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private servicio: InmuebleService
  ) { }

  ngOnInit(): void {
    this.CreacionDeFormularios()
  }

  CreacionDeFormularios() {
    this.dataForm = this.fb.group({
      area: ["", [Validators.required]],
      nroDocumentoPropietario: ["", [Validators.required]],
      nroDocumentoHabitante: ["", [Validators.required]],
      idTipoInmueble: [1, [Validators.required]],
      idSeccion: [1, [Validators.required]],
    })
  }

  get getDF() {
    return this.dataForm.controls;
  }
  guardarDatos() {
    let model = new InmuebleModel();

    model.area = this.getDF["area"].value
    model.nroDocumentoPropietario = Number(this.getDF["nroDocumentoPropietario"].value)
    model.nroDocumentoHabitante = Number(this.getDF["nroDocumentoHabitante"].value)
    model.idTipoInmueble = this.getDF["idTipoInmueble"].value
    model.idSeccion = this.getDF["idSeccion"].value

    this.servicio.GuardarListaInmueble(model).subscribe({
      next: (data: InmuebleModel) => {
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_GUARDADO)
        this.router.navigate(["/parametros/Listar-Inmueble"])
      }
    })
  }

}
