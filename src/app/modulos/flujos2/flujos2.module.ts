import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Flujos2RoutingModule } from './flujos2-routing.module';
import { DiagramaFlujoComponent } from './diagrama-flujo/diagrama-flujo.component';


@NgModule({
  declarations: [DiagramaFlujoComponent],
  imports: [
    CommonModule,
    Flujos2RoutingModule
  ]
})
export class Flujos2Module { }
