import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { SeccionModel } from 'src/app/modelos/parametros/seccion.model';
import { SeccionService } from 'src/app/servicios/parametros/seccion.service';

declare const MostrarMensaje:any;
@Component({
  selector: 'app-editar-seccion',
  templateUrl: './editar-seccion.component.html',
  styleUrls: ['./editar-seccion.component.css']
})

export class EditarSeccionComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private servicio:  SeccionService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.CreacionDeFormularios()
    this.buscarDatos()
  }

  CreacionDeFormularios(){
    this.dataForm = this.fb.group({
      id: ["",[Validators.required]],
      name: ["",[Validators.required]],
      descripcion: [""]
    })
  }

  get getDF(){
    return this.dataForm.controls;
  }

  buscarDatos(){
    console.log("jose");
    let id = this.route.snapshot.params["id"];
    this.servicio.ObtenerSeccion(id).subscribe({
      next: (data: SeccionModel) => {
        this.getDF["id"].setValue(data.id);
        this.getDF["name"].setValue(data.nombre);
        this.getDF["descripcion"].setValue(data.descripcion)
      }
    });
  }
  
  guardarDatos(){
    let model = new SeccionModel();
    model.nombre = this.getDF["name"].value
    model.id= this.getDF["id"].value
    model.descripcion= this.getDF["descripcion"].value
    this.servicio.EditarListaSeccion(model).subscribe({
      next: (data: SeccionModel) =>{
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_ACTUALIZADO)
        this.router.navigate(["/parametros/listar-seccion"])
      }
    })
  }

}

