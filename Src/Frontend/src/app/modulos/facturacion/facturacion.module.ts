import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturacionRoutingModule } from './facturacion-routing.module';
import { CrearComponent } from './Venta/crear/crear.component';
import { EditarComponent } from './Venta/editar/editar.component';
import { ListarComponent } from './Venta/listar/listar.component';
import { AnularComponent } from './Venta/anular/anular.component';
import { ConsultarComponent } from './Factura/consultar/consultar.component';
import { VisualizarComponent } from './Factura/visualizar/visualizar.component';
import { EditarFacturaComponent } from './Factura/editar-factura/editar-factura.component';
import { CrearMultaComponent } from './Multa/crear-multa/crear-multa.component';
import { ListarMultaComponent } from './Multa/listar-multa/listar-multa.component';
import { EditarMultaComponent } from './Multa/editar-multa/editar-multa.component';
import { AnularMultaComponent } from './Multa/anular-multa/anular-multa.component';


@NgModule({
  declarations: [
    CrearComponent,
    EditarComponent,
    ListarComponent,
    AnularComponent,
    ConsultarComponent,
    VisualizarComponent,
    EditarFacturaComponent,
    CrearMultaComponent,
    ListarMultaComponent,
    EditarMultaComponent,
    AnularMultaComponent
  ],
  imports: [
    CommonModule,
    FacturacionRoutingModule
  ]
})
export class FacturacionModule { }
