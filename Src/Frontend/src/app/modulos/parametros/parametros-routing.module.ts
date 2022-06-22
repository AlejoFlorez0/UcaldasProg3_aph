import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAdicionalComponent } from './Adicional/crear-adicional/crear-adicional.component';
import { EditarAdicionalComponent } from './Adicional/editar-adicional/editar-adicional.component';
import { ListarAdicionalComponent } from './Adicional/listar-adicional/listar-adicional.component';
import { RemoverAdicionalComponent } from './Adicional/remover-adicional/remover-adicional.component';
import { CrearInmubleComponent } from './Inmueble/crear-inmuble/crear-inmuble.component';
import { EditarinmuebleComponent } from './Inmueble/editarinmueble/editarinmueble.component';
import { ListarInmuebleComponent } from './Inmueble/listar-inmueble/listar-inmueble.component';
import { ReomverInmuebleComponent } from './Inmueble/reomver-inmueble/reomver-inmueble.component';
import { CrearSeccionComponent } from './Seccion/crear-seccion/crear-seccion.component';
import { EditarSeccionComponent } from './Seccion/editar-seccion/editar-seccion.component';
import { ListarSeccionComponent } from './Seccion/listar-seccion/listar-seccion.component';
import { RemoverSeccionComponent } from './Seccion/remover-seccion/remover-seccion.component';
import { CrearTipoComponent } from './Tipo/crear-tipo/crear-tipo.component';
import { EditarTipoComponent } from './Tipo/editar-tipo/editar-tipo.component';
import { ListarTipoComponent } from './Tipo/listar-tipo/listar-tipo.component';
import { RemoverTipoComponent } from './Tipo/remover-tipo/remover-tipo.component';

const routes: Routes = [
  {
    path: "Crear-Adicional",
    component: CrearAdicionalComponent
  }, {
    path: "Editar-Adicional",
    component: EditarAdicionalComponent
  }, {
    path: "Eliminar-Adiconal",
    component: RemoverAdicionalComponent
  }, {
    path: "Listar-Adicional",
    component: ListarAdicionalComponent
  }, {
    path: "Crear-Inmueble",
    component: CrearInmubleComponent
  }, {
    path: "Editar-Inmueble/:id",
    component: EditarinmuebleComponent
  }, {
    path: "Eliminar-Inmueble/:id",
    component: ReomverInmuebleComponent
  }, {
    path: "Listar-Inmueble",
    component: ListarInmuebleComponent
  }, {
    path: "Crear-Seccion",
    component: CrearSeccionComponent
  },{
    path:"Editar-Seccion/:id",
    component:  EditarSeccionComponent
  },{
    path:"Eliminar-Seccion/:id",
    component: RemoverSeccionComponent
  }, {
    path: "Listar-Seccion",
    component: ListarSeccionComponent
  }, {
    path: "Crear-Tipo",
    component: CrearTipoComponent
  },{
    path:"Editar-Tipo/:id",
    component:  EditarTipoComponent
  },{
    path:"Eliminar-Tipo/:id",
    component: RemoverTipoComponent
  }, {
    path: "Listar-Tipo",
    component: ListarTipoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }