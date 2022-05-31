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
  }

  CreacionDeFormularios(){
    this.dataForm = this.fb.group({
      id: ["",[Validators.required]],
      name: ["",[Validators.required]],
    })
  }

  get getDF(){
    return this.dataForm.controls;
  }

  buscarDatos(){
    let id = this.route.snapshot.params["id"];
    this.servicio.EditarListaRoles(id).subscribe({
      next: (data: rolModel) => {
        this.getDF["id"].setValue(data.id);
        this.getDF["name"].setValue(data.nombre);
      }
    });
  }
  
  guardarDatos(){
    let model = new rolModel();
    model.nombre = this.getDF["name"].value
    model.id= this.getDF["id"].value
    this.servicio.GuardarListaRoles(model).subscribe({
      next: (data: rolModel) =>{
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_ACTUALIZADO)
        this.router.navigate(["/seguridad/crear-rol"])
      }
    })
  }

}
