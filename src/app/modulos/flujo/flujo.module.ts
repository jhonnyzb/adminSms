import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlujoRoutingModule } from './flujo-routing.module';
import { InicioflujoComponent } from './inicioflujo/inicioflujo.component';
import { MensajeSmsComponent } from './mensaje-sms/mensaje-sms.component';
import { MensajeWhatsappComponent } from './mensaje-whatsapp/mensaje-whatsapp.component';
import { EvaluarMensajeComponent } from './evaluar-mensaje/evaluar-mensaje.component';


@NgModule({
  declarations: [InicioflujoComponent, MensajeSmsComponent, MensajeWhatsappComponent, EvaluarMensajeComponent],
  imports: [
    CommonModule,
    FlujoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FlujoModule { }
