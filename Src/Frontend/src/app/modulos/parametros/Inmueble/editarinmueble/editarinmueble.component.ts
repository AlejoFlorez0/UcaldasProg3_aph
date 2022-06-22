import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { InmuebleModel } from 'src/app/modelos/parametros/inmueble.model';
import { InmuebleService } from 'src/app/servicios/parametros/inmueble.service';



declare const MostrarMensaje: any;

@Component({
  selector: 'app-editarinmueble',
  templateUrl: './editarinmueble.component.html',
  styleUrls: ['./editarinmueble.component.css']
})
export class EditarinmuebleComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private servicio: InmuebleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreacionDeFormularios()
    this.buscarDatos()
  }

  CreacionDeFormularios() {
    this.dataForm = this.fb.group({
      idInmueble: [],
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

  buscarDatos() {
    let id = this.route.snapshot.params["id"];
    this.servicio.ObtenerInmueble(id).subscribe({
      next: (data: InmuebleModel) => {

        this.getDF["idInmueble"].setValue(data.idInmueble)
        this.getDF["area"].setValue(data.area)
        this.getDF["nroDocumentoPropietario"].setValue(data.nroDocumentoPropietario)
        this.getDF["nroDocumentoHabitante"].setValue(data.nroDocumentoHabitante)
        this.getDF["idTipoInmueble"].setValue(data.idTipoInmueble)
        this.getDF["idSeccion"].setValue(data.idSeccion)
      }
    });
  }

  guardarDatos() {
    let model = new InmuebleModel();

    model.idInmueble = this.getDF["idInmueble"].value
    model.area = this.getDF["area"].value
    model.nroDocumentoPropietario = this.getDF["nroDocumentoPropietario"].value
    model.nroDocumentoHabitante = this.getDF["nroDocumentoHabitante"].value
    model.idTipoInmueble = this.getDF["idTipoInmueble"].value
    model.idSeccion = this.getDF["idSeccion"].value
    this.servicio.EditarListaInmueble(model).subscribe({
      next: (data: InmuebleModel) => {
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_ACTUALIZADO)
        this.router.navigate(["/parametros/Listar-Inmueble"])
      }
    })
  }

}
