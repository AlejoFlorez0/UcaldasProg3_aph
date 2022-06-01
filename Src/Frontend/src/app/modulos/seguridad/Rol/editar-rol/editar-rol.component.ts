import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { rolModel } from 'src/app/modelos/seguridad/rol.model';
import { RolService } from 'src/app/servicios/Seguridad/rol.service';



declare const MostrarMensaje:any;
@Component({
  selector: 'app-editar-rol',
  templateUrl: './editar-rol.component.html',
  styleUrls: ['./editar-rol.component.css']
})
export class EditarRolComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private servicio:  RolService,
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
    this.servicio.ObtenerRol(id).subscribe({
      next: (data: rolModel) => {
        this.getDF["id"].setValue(data.idRol);
        this.getDF["name"].setValue(data.nombre);
        this.getDF["descripcion"].setValue(data.descripcion)
      }
    });
  }
  
  guardarDatos(){
    let model = new rolModel();
    model.nombre = this.getDF["name"].value
    model.idRol= this.getDF["id"].value
    model.descripcion= this.getDF["descripcion"].value
    this.servicio.EditarListaRoles(model).subscribe({
      next: (data: rolModel) =>{
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_ACTUALIZADO)
        this.router.navigate(["/seguridad/listar-rol"])
      }
    })
  }

}
