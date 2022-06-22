import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { MultaModel } from 'src/app/modelos/facturacion/multa.model';
import { MultaService } from 'src/app/Servicios/facturacion/multa.service';

declare const MostrarMensaje:any;
@Component({
  selector: 'app-editar-multa',
  templateUrl: './editar-multa.component.html',
  styleUrls: ['./editar-multa.component.css']
})
export class EditarMultaComponent implements OnInit {

 
  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private servicio:  MultaService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.CreacionDeFormularios()
    this.buscarDatos()
  }

  CreacionDeFormularios(){
    this.dataForm = this.fb.group({
      id: ["",[Validators.required]],
      nombre: ["",[Validators.required]],
      valor: ["",[Validators.required]],
      descripcion: [""]
    })
  }

  get getDF(){
    return this.dataForm.controls;
  }

  buscarDatos(){
    console.log("jose");
    let id = this.route.snapshot.params["id"];
    this.servicio.ObtenerMulta(id).subscribe({
      next: (data: MultaModel) => {
        this.getDF["id"].setValue(data.idMulta);
        this.getDF["nombre"].setValue(data.nombre);
        this.getDF["valor"].setValue(data.nombre);
        this.getDF["descripcion"].setValue(data.descripcion)
      }
    });
  }
  
  guardarDatos(){
    let model = new MultaModel();
    model.nombre = this.getDF["nombre"].value
    model.idMulta= this.getDF["id"].value
    model.descripcion= this.getDF["descripcion"].value
    this.servicio.EditarListaMulta(model).subscribe({
      next: (data: MultaModel) =>{
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_ACTUALIZADO)
        this.router.navigate(["/seguridad/listar-rol"])
      }
    })
  }

}
