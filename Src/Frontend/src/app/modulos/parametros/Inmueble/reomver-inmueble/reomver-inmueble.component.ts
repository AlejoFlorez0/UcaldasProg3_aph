import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionInformacion } from 'src/app/Config/ConfifurationData';
import { InmuebleModel } from 'src/app/modelos/parametros/inmueble.model';
import { InmuebleService } from 'src/app/servicios/parametros/inmueble.service';
declare const MostrarMensaje:any;

@Component({
  selector: 'app-reomver-inmueble',
  templateUrl: './reomver-inmueble.component.html',
  styleUrls: ['./reomver-inmueble.component.css']
})
export class ReomverInmuebleComponent implements OnInit {
  idInmueble: number = 1;
  area: string = "A";
  nroDocumentoPropietario: number = 0;
  nroDocumentoHabitante: number = 0;
  idTipoInmueble: number = 1;
  idSeccion: number = 1;

  constructor(
    private router: Router,
    private servicio:  InmuebleService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.buscarDatos()
  }

  buscarDatos(){
    let id = this.route.snapshot.params["id"];
    this.servicio.ObtenerInmueble(id).subscribe({
      next: (data: InmuebleModel) => {
        if(data.area && data.nroDocumentoPropietario && data.nroDocumentoHabitante && data.nroDocumentoHabitante && data.nroDocumentoHabitante && data.idTipoInmueble && data.idSeccion){
        this.area = data.area;
        this.nroDocumentoPropietario =data.nroDocumentoPropietario;
        this.nroDocumentoHabitante =data.nroDocumentoHabitante;
        this.idTipoInmueble = data.idTipoInmueble;
        this.idSeccion = data.idSeccion;  
        }
      }
    });
  }
  
  EliminarDatos(){
    this.servicio.EliminarInmueble(this.idInmueble).subscribe({
      next: (data: any) =>{
        MostrarMensaje(ConfiguracionInformacion.CONFIRMACION_ELIMINACION)
        this.router.navigate(["/parametros/listar-inmueble"])
      }
    })
  }
}
