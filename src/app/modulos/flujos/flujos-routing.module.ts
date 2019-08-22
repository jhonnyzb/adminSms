import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderFlujosComunicacionComponent } from './header-flujos-comunicacion/header-flujos-comunicacion.component';
import { FormSmsComponent } from './form-sms/form-sms.component';
import { FormEvaluarSmsComponent } from './form-evaluar-sms/form-evaluar-sms.component';
import { FormSmsRespuestaComponent } from './form-sms-respuesta/form-sms-respuesta.component';


const routes: Routes = [
{
  path: '', component: HeaderFlujosComunicacionComponent,
  children: [
    {
      path: 'formsms', component: FormSmsComponent, data: { icon:'comment', name:'Enviar mensaje SMS' }
    },
    {
      path: 'formevasms', component: FormEvaluarSmsComponent, data: { icon:'mobile', name:'Evaluar mensaje SMS'}
    },
    {
      path: 'formsmsres', component: FormSmsRespuestaComponent, data: {icon:'comment', name:'Enviar mensaje  SMS respuesta'}
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlujosRoutingModule { }
