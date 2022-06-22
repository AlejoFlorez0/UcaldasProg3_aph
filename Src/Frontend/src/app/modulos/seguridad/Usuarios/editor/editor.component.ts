import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { DatosUsuarioModel } from 'src/app/modelos/seguridad/usuario-data.model';
import { UsuarioService } from 'src/app/servicios/Seguridad/usuario.service';

declare const MostrarMensaje: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private servicio: UsuarioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreacionDeFormularios()
    this.buscarDatos()
  }

  CreacionDeFormularios() {
    this.dataForm = this.fb.group({
      nroDocumento: ["", [Validators.required]],
      primerNombre: ["", [Validators.required]],
      segundoNombre: ["", []],
      primerApellido: ["", [Validators.required]],
      segundoApellido: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
      celular: ["", [Validators.required]],
      rolId: [6, [Validators.required]],
    })
  }

  get getDF() {
    return this.dataForm.controls;
  }

  buscarDatos() {
    let id = this.route.snapshot.params["id"];
    this.servicio.ObtenerUsuario(id).subscribe({
      next: (data: DatosUsuarioModel) => {
        console.log();
        this.getDF["nroDocumento"].setValue(data.nroDocumento)
        this.getDF["primerNombre"].setValue(data.primerNombre)
        this.getDF["segundoNombre"].setValue(data.segundoNombre)
        this.getDF["primerApellido"].setValue(data.primerApellido)
        this.getDF["segundoApellido"].setValue(data.segundoApellido)
        this.getDF["email"].setValue(data.email)
        this.getDF["password"].setValue(data.password)
        this.getDF["celular"].setValue(data.celular)
        this.getDF["rolId"].setValue(data.rolId)
      }
    });
  }

  guardarDatos() {
    let model = new DatosUsuarioModel();

    model.nroDocumento = this.getDF["nroDocumento"].value
    model.primerNombre = this.getDF["primerNombre"].value
    model.segundoNombre = this.getDF["segundoNombre"].value
    model.primerApellido = this.getDF["primerApellido"].value
    model.segundoApellido = this.getDF["segundoApellido"].value
    model.email = this.getDF["email"].value
    model.password = this.getDF["password"].value
    model.celular = this.getDF["celular"].value
    model.rolId = this.getDF["rolId"].value

    this.servicio.EditarListaUsuarios(model).subscribe({
      next: (data: DatosUsuarioModel) => {
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_ACTUALIZADO)
        this.router.navigate(["/seguridad/Listar-Usuario"])
      }
    })
  }

}