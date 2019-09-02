import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlujoRoutingModule } from './flujo-routing.module';
import { InicioflujoComponent } from './inicioflujo/inicioflujo.component';
import { MensajeSmsComponent } from './mensaje-sms/mensaje-sms.component';


@NgModule({
  declarations: [InicioflujoComponent, MensajeSmsComponent],
  imports: [
    CommonModule,
    FlujoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FlujoModule { }
