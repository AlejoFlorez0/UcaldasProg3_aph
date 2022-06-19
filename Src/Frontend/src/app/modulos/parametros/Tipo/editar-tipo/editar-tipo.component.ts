import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { TiposModel } from 'src/app/modelos/parametros/tipo.model';
import { TipoService } from 'src/app/servicios/parametros/tipo.service';




declare const MostrarMensaje:any;
@Component({
  selector: 'app-editar-tipo',
  templateUrl: './editar-tipo.component.html',
  styleUrls: ['./editar-tipo.component.css']
})
export class EditarTipoComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private servicio: TipoService,
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
    this.servicio.ObtenerTipo(id).subscribe({
      next: (data: TiposModel) => {
        this.getDF["id"].setValue(data.id);
        this.getDF["name"].setValue(data.nombre);
        this.getDF["descripcion"].setValue(data.descripcion)
      }
    });
  }
  
  guardarDatos(){
    let model = new TiposModel();
    model.nombre = this.getDF["name"].value
    model.id= this.getDF["id"].value
    model.descripcion= this.getDF["descripcion"].value
    this.servicio.EditarListaTipo(model).subscribe({
      next: (data: TiposModel) =>{
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_ACTUALIZADO)
        this.router.navigate(["/parametros/listar-Tipo"])
      }
    })
  }

}
