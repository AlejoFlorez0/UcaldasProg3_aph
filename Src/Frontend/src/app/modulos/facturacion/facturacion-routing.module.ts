import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnularMultaComponent } from './Multa/anular-multa/anular-multa.component';
import { CrearMultaComponent } from './Multa/crear-multa/crear-multa.component';
import { EditarMultaComponent } from './Multa/editar-multa/editar-multa.component';
import { ListarMultaComponent } from './Multa/listar-multa/listar-multa.component';
import { AnularComponent } from './Venta/anular/anular.component';
import { CrearComponent } from './Venta/crear/crear.component';
import { EditarComponent } from './Venta/editar/editar.component';
import { ListarComponent } from './Venta/listar/listar.component';

const routes: Routes = [
  {
    path:"Crear-Venta",
    component: CrearComponent
  },{
    path:"Editar-Venta",
    component:  EditarComponent
  },{
    path:"Anular-Venta",
    component: AnularComponent
  },{
    path:"Listar-Venta",
    component: ListarComponent
  },{
    path:"Crear-Multa",
    component: CrearMultaComponent
  },{
    path:"Editar-Multa/:id",
    component: EditarMultaComponent
  },{
    path:"Anular-Multa/:id",
    component: AnularMultaComponent
  },{
    path:"Listar-Multa",
    component: ListarMultaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturacionRoutingModule { }
