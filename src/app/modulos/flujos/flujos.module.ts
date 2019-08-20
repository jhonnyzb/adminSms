import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlujosRoutingModule } from './flujos-routing.module';
import { HeaderFlujosComunicacionComponent } from './header-flujos-comunicacion/header-flujos-comunicacion.component';


@NgModule({
  declarations: [HeaderFlujosComunicacionComponent],
  imports: [
    CommonModule,
    FlujosRoutingModule
  ]
})
export class FlujosModule { }
