import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { DatosUsuarioModel } from 'src/app/modelos/seguridad/usuario-data.model';
import { UsuarioService } from 'src/app/servicios/Seguridad/usuario.service';

declare const MostrarMensaje: any;

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})

export class CrearComponent implements OnInit {


  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private servicio: UsuarioService
  ) { }

  ngOnInit(): void {
    this.CreacionDeFormularios()
  }

  CreacionDeFormularios() {
    this.dataForm = this.fb.group({
      nroDocumento: ["", [Validators.required]],
      primerNombre: ["", [Validators.required]],
      segundoNombre: ["", [Validators.required]],
      primerApellido: ["", [Validators.required]],
      segundoApellido: ["", [Validators.required]],
      email: ["", [Validators.required]],
      celular: ["", [Validators.required]],
      rolId: [6, [Validators.required]],
    })
  }

  get getDF() {
    return this.dataForm.controls;
  }
  guardarDatos() {
    let model = new DatosUsuarioModel();

    model.nroDocumento = this.getDF["nroDocumento"].value
    model.primerNombre = this.getDF["primerNombre"].value
    model.segundoNombre = this.getDF["segundoNombre"].value
    model.primerApellido = this.getDF["primerApellido"].value
    model.segundoApellido = this.getDF["segundoApellido"].value
    model.email = this.getDF["email"].value
    model.password = "";
    model.celular = this.getDF["celular"].value

    model.rolId = 6;
    this.servicio.GuardarListaUsuarios(model).subscribe({
      next: (data: DatosUsuarioModel) => {
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_GUARDADO)
        this.router.navigate(["/seguridad/Listar-Usuario"])
      }
    })
  }
}
