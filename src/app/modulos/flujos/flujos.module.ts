import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlujosRoutingModule } from './flujos-routing.module';
import { HeaderFlujosComunicacionComponent } from './header-flujos-comunicacion/header-flujos-comunicacion.component';
import { FormSmsComponent } from './form-sms/form-sms.component';
import { FormEvaluarSmsComponent } from './form-evaluar-sms/form-evaluar-sms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrosModule } from '../registros/registros.module';
import { FormSmsRespuestaComponent } from './form-sms-respuesta/form-sms-respuesta.component';



@NgModule({
  declarations: [HeaderFlujosComunicacionComponent, FormSmsComponent, FormEvaluarSmsComponent, FormSmsRespuestaComponent],
  imports: [
    CommonModule,
    FlujosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RegistrosModule
  ]
})
export class FlujosModule { }
