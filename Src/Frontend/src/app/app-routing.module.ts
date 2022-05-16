import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './public/Errors/not-found/not-found.component';
import { PrincipalComponent } from './public/general/principal/principal.component';

const routes: Routes = [
  {
    path: "principal",
    component:  PrincipalComponent
  },
  {
    path:"seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path:"parametros", 
    loadChildren: () => import("./modulos/parametros/paramtetros.module").then(x => x.parametrosmodule)
  },
  {
    path:"facturacion",
    loadChildren: () => import("./modulos/facturacion/facturacion.module").then(x => x.FacturacionModule)
  },
  {
    path: "",
    pathMatch:"full",
    redirectTo:"/principal"
  },
  {
    path:"**",
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
