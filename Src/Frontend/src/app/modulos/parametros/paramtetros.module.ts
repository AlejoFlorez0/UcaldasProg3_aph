import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParametrosRoutingModule } from './parametros-routing.module';
import { CrearAdicionalComponent } from './Adicional/crear-adicional/crear-adicional.component';
import { EditarAdicionalComponent } from './Adicional/editar-adicional/editar-adicional.component';
import { ListarAdicionalComponent } from './Adicional/listar-adicional/listar-adicional.component';
import { RemoverAdicionalComponent } from './Adicional/remover-adicional/remover-adicional.component';
import { CrearSeccionComponent } from './Seccion/crear-seccion/crear-seccion.component';
import { ListarSeccionComponent } from './Seccion/listar-seccion/listar-seccion.component';
import { RemoverSeccionComponent } from './Seccion/remover-seccion/remover-seccion.component';
import { CrearTipoComponent } from './Tipo/crear-tipo/crear-tipo.component';
import { EditarTipoComponent } from './Tipo/editar-tipo/editar-tipo.component';
import { ListarTipoComponent } from './Tipo/listar-tipo/listar-tipo.component';
import { RemoverTipoComponent } from './Tipo/remover-tipo/remover-tipo.component';
import { CrearInmubleComponent } from './Inmueble/crear-inmuble/crear-inmuble.component';
import { EditarinmuebleComponent } from './Inmueble/editarinmueble/editarinmueble.component';
import { ListarInmuebleComponent } from './Inmueble/listar-inmueble/listar-inmueble.component';
import { ReomverInmuebleComponent } from './Inmueble/reomver-inmueble/reomver-inmueble.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InmuebleArchivoCsvComponent } from './Inmueble/inmueble-archivo-csv/inmueble-archivo-csv.component';



@NgModule({
  declarations: [
    CrearAdicionalComponent,
    EditarAdicionalComponent,
    ListarAdicionalComponent,
    RemoverAdicionalComponent,
    CrearSeccionComponent,
    ListarSeccionComponent,
    RemoverSeccionComponent,
    CrearTipoComponent,
    EditarTipoComponent,
    ListarTipoComponent,
    RemoverTipoComponent,
    CrearInmubleComponent,
    EditarinmuebleComponent,
    ListarInmuebleComponent,
    ReomverInmuebleComponent,
    InmuebleArchivoCsvComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ParametrosRoutingModule,
    ReactiveFormsModule

  ]
})
export class parametrosmodule { }