import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarCComponent } from './general/cambiar-c/cambiar-c.component';
import { CerrarComponent } from './general/cerrar/cerrar.component';
import { InicioComponent } from './general/inicio/inicio.component';
import { RecuperarCComponent } from './general/recuperar-c/recuperar-c.component';
import { CrearRolComponent } from './Rol/crear-rol/crear-rol.component';
import { ListarRolComponent } from './Rol/listar-rol/listar-rol.component';
import { RemoverRolComponent } from './Rol/remover-rol/remover-rol.component';
import { CrearComponent } from './Usuarios/crear/crear.component';
import { EditorComponent } from './Usuarios/editor/editor.component';
import { EliminarComponent } from './Usuarios/eliminar/eliminar.component';
import { ListarComponent } from './Usuarios/listar/listar.component';

const routes: Routes = [
  {
    path:"Crear-Usuario",
    component: CrearComponent
  },{
    path:"Editar-Usuario",
    component: EditorComponent
  },{
    path:"Eliminar-Usuario",
    component: EliminarComponent
  },{
    path:"Listar-Usuario",
    component: ListarComponent
  },{
    path:"Cambiar-Contraseña",
    component:  CambiarCComponent
  },{
    path:"Cerrar",
    component: CerrarComponent
  },{
    path:"Inicio",
    component: InicioComponent
  },{
    path:"Recuperar-Contraseña",
    component: RecuperarCComponent
  },{
    path: "crear-rol",
    component:CrearRolComponent
  },{
    path:"editar-rol/id",
    component:EditorComponent
  },{
    path:"listar-rol",
    component:ListarRolComponent
  },{
    path:"remover-rol",
    component:RemoverRolComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
