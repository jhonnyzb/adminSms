import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderFlujosComunicacionComponent } from './header-flujos-comunicacion/header-flujos-comunicacion.component';
import { FormSmsComponent } from './form-sms/form-sms.component';
import { FormEvaluarSmsComponent } from './form-evaluar-sms/form-evaluar-sms.component';


const routes: Routes = [
{
  path: '', component: HeaderFlujosComunicacionComponent,
  children: [
    {
      path: 'formsms', component: FormSmsComponent
    },
    {
      path: 'formevasms', component: FormEvaluarSmsComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlujosRoutingModule { }
