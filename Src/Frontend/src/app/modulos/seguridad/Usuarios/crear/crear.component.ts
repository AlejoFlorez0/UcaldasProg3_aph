import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { DatosUsuarioModel } from 'src/app/modelos/seguridad/usuario-data.model';
import { UsuarioService } from 'src/app/servicios/Seguridad/usuario.service';

declare const MostrarMensaje:any;

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})

export class CrearComponent implements OnInit {


  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private servicio:  UsuarioService
    ) { }

  ngOnInit(): void {
    this.CreacionDeFormularios()
  }

  CreacionDeFormularios(){
    this.dataForm = this.fb.group({
      nroDocument: ["",[Validators.required]],
      primerNombre: ["",[Validators.required]],
      segundoNombre: ["",[Validators.required]],
      primerApellido: ["",[Validators.required]],
      segundoApellido: ["",[Validators.required]],
      email: ["",[Validators.required]],
      celular: ["",[Validators.required]],
      rolId: [6,[Validators.required]],
    })
  }

  get getDF(){
    return this.dataForm.controls;
  }
  guardarDatos(){
    let model = new DatosUsuarioModel();
    model.nroDocument = this.getDF["Documento"].value
    model.primerNombre= this.getDF["Primer Nombre"].value
    model.segundoNombre= this.getDF["Segundo Nombre"].value
    model.primerApellido= this.getDF["Primer Apellido"].value
    model.segundoApellido= this.getDF["Segundo Apellido"].value
    model.email= this.getDF["Correo"].value
    model.celular= this.getDF["Celular"].value
    model.rolId= this.getDF["IdRol"].value
    this.servicio.GuardarListaUsuarios(model).subscribe({
      next: (data: DatosUsuarioModel) =>{
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_GUARDADO)
        this.router.navigate(["/seguridad/crear"])
      }
    })
  }
}
