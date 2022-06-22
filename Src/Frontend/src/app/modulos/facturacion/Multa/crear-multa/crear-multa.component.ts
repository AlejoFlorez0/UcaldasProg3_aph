import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { MultaModel } from 'src/app/modelos/facturacion/multa.model';
import { MultaService } from 'src/app/Servicios/facturacion/multa.service';

declare const MostrarMensaje:any;

@Component({
  selector: 'app-crear-multa',
  templateUrl: './crear-multa.component.html',
  styleUrls: ['./crear-multa.component.css']
})
export class CrearMultaComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private servicio:  MultaService
    ) { }

  ngOnInit(): void {
    this.CreacionDeFormularios()
  }

  CreacionDeFormularios(){
    this.dataForm = this.fb.group({
      nombre: ["",[Validators.required]],
      valor: ["",[Validators.required]],
      descripcion: ["",[Validators.required]]
    })
  }

  get getDF(){
    return this.dataForm.controls;
  }
  guardarDatos(){
    let model = new MultaModel();
    model.nombre = this.getDF["nombre"].value
    model.valor = this.getDF["valor"].value
    model.descripcion= this.getDF["descripcion"].value
    this.servicio.GuardarListaMultas(model).subscribe({
      next: (data: MultaModel) =>{
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_GUARDADO)
        this.router.navigate(["/facturacion/crear-multa"])
      }
    })
  }

}
