import { LocalizedString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { datasessionModel } from 'src/app/modelos/data-session.mode';
import { credencialesUsuarioModel } from 'src/app/modelos/usuario-credenciales.model';
import { LocalStorageService } from 'src/app/servicios/compartir/local-storage.service';
import { SeguridadService } from 'src/app/servicios/compartir/seguridad.service';

declare const MostrarMensaje:any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private securityservice:SeguridadService,
    private localStorageService: LocalStorageService,
    private router: Router
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
  /*Falta el sistema de cifrado ya que como no hay inicio en backend no se como o con que funcion se cifro
   Video 37-despues del minuto 13*/
  iniciarSesion(){
    if(this.dataForm.invalid){
      MostrarMensaje("")
    }else{
      let credenciales =  new credencialesUsuarioModel();
      credenciales.usuario = this.getDF["usuario"].value;
      credenciales.contraseña = this.getDF["contraseña"].value;
      /*en el video dicen que en la version actual esto causa error
      pero al corregirlo me causa error de isntaxis video 38-m */
      this.securityservice.login(credenciales).subscribe((data:datasessionModel)=>{
        console.log(data);
        let saved = this.localStorageService.Guardarsesion(data);
        data.EstaIniciado =true;
        this.securityservice.recargarsesion(data);
        this.router.navigate(["/home"])
      },(error:any)=>{});
    }
  }

  get getDF(){
    return this.dataForm.controls;
  }
}
