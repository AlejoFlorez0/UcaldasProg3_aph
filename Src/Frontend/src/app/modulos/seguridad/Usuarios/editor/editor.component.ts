import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { DatosUsuarioModel } from 'src/app/modelos/seguridad/usuario-data.model';
import { UsuarioService } from 'src/app/servicios/Seguridad/usuario.service';

declare const MostrarMensaje:any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private servicio:  UsuarioService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.CreacionDeFormularios()
    this.buscarDatos()
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

  buscarDatos(){
    console.log("jose");
    let id = this.route.snapshot.params["id"];
    this.servicio.ObtenerUsuario(id).subscribe({
      next: (data: DatosUsuarioModel) => {
        this.getDF["Documento"].setValue(data.nroDocument)
        this.getDF["Primer Nombre"].setValue(data.primerNombre)
        this.getDF["Segundo Nombre"].setValue(data.segundoNombre)
        this.getDF["Primer Apellido"].setValue(data.primerApellido)
        this.getDF["Primer Apellido"].setValue(data.segundoApellido)
        this.getDF["Correo"].setValue(data.email)
        this.getDF["Celular"].setValue(data.celular)
        this.getDF["IDrol"].setValue(data.rolId)
      }
    });
  }
  
  guardarDatos(){
    let model = new DatosUsuarioModel();
    model.nroDocument = this.getDF["Documento"].value
    model.primerNombre= this.getDF["Primer Nombre"].value
    model.segundoNombre= this.getDF["Segundo Nombre"].value
    model.primerApellido= this.getDF["Primer Apellido"].value
    model.segundoApellido= this.getDF["Primer Apellido"].value
    model.email= this.getDF["Correo"].value
    model.celular= this.getDF["Celular"].value
    model.rolId = this.getDF["Rolos"].value 
    this.servicio.EditarListaUsuarios(model).subscribe({
      next: (data: DatosUsuarioModel) =>{
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_ACTUALIZADO)
        this.router.navigate(["/seguridad/listar-rol"])
      }
    })
}

}