import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InmuebleArchivoCsvComponent } from './modulos/parametros/Inmueble/inmueble-archivo-csv/inmueble-archivo-csv.component';
import { ArchivoCsvComponent } from './modulos/seguridad/Usuarios/archivo-csv/archivo-csv.component';
import { NotFoundComponent } from './public/Errors/not-found/not-found.component';
import { PrincipalComponent } from './public/general/principal/principal.component';

const routes: Routes = [
  {
    path: "principal",
    component: PrincipalComponent
  },
  {
    path: "seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path: "parametros",
    loadChildren: () => import("./modulos/parametros/paramtetros.module").then(x => x.parametrosmodule)
  },
  {
    path: "facturacion",
    loadChildren: () => import("./modulos/facturacion/facturacion.module").then(x => x.FacturacionModule)
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/principal"
  },
  {
    path: "userCsvFile",
    component: ArchivoCsvComponent
  },
  {
    path: "inmuebleCsvFile",
    component: InmuebleArchivoCsvComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
