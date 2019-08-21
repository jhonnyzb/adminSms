import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlujosRoutingModule } from './flujos-routing.module';
import { HeaderFlujosComunicacionComponent } from './header-flujos-comunicacion/header-flujos-comunicacion.component';
import { FormSmsComponent } from './form-sms/form-sms.component';
import { FormEvaluarSmsComponent } from './form-evaluar-sms/form-evaluar-sms.component';


@NgModule({
  declarations: [HeaderFlujosComunicacionComponent, FormSmsComponent, FormEvaluarSmsComponent],
  imports: [
    CommonModule,
    FlujosRoutingModule
  ]
})
export class FlujosModule { }
