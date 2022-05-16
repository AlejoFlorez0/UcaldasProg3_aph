import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';

declare const MostrarMensaje:any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.CreacionDeFormularios()
  }

  CreacionDeFormularios(){
    this.dataForm = this.fb.group({
      usuario: ["",[Validators.required,Validators.email,Validators.minLength(5)]],
      contraseña: ["",[Validators.required, Validators.minLength(8)]]
    })
  }
  iniciarSesion(){
    if(this.dataForm.invalid){
      MostrarMensaje("")
    }else{
      MostrarMensaje(ConfiguracionInformacion.valid_FORM_MESSAGE)
    }
  }
}
