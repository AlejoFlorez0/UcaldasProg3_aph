import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RolService } from 'src/app/servicios/Seguridad/rol.service';

declare const MostrarMensaje:any;
@Component({
  selector: 'app-crear-rol',
  templateUrl: './crear-rol.component.html',
  styleUrls: ['./crear-rol.component.css']
})
export class CrearRolComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private servicio:  RolService
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

  }

}
