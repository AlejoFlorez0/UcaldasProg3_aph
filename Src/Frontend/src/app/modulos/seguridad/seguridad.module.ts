import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { InicioComponent } from './general/inicio/inicio.component';
import { CerrarComponent } from './general/cerrar/cerrar.component';
import { CambiarCComponent } from './general/cambiar-c/cambiar-c.component';
import { RecuperarCComponent } from './general/recuperar-c/recuperar-c.component';
import { CrearComponent } from './Usuarios/crear/crear.component';
import { EditorComponent } from './Usuarios/editor/editor.component';
import { ListarComponent } from './Usuarios/listar/listar.component';
import { EliminarComponent } from './Usuarios/eliminar/eliminar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearRolComponent } from './Rol/crear-rol/crear-rol.component';
import { RemoverRolComponent } from './Rol/remover-rol/remover-rol.component';
import { EditarRolComponent } from './Rol/editar-rol/editar-rol.component';
import { ListarRolComponent } from './Rol/listar-rol/listar-rol.component';
import { ArchivoCsvComponent } from './Usuarios/archivo-csv/archivo-csv.component';


@NgModule({
  declarations: [
    InicioComponent,
    CerrarComponent,
    CambiarCComponent,
    RecuperarCComponent,
    CrearComponent,
    EditorComponent,
    ListarComponent,
    EliminarComponent,
    CrearRolComponent,
    RemoverRolComponent,
    EditarRolComponent,
    ListarRolComponent,
    ArchivoCsvComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
