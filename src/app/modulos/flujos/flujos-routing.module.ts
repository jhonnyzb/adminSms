import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderFlujosComunicacionComponent } from './header-flujos-comunicacion/header-flujos-comunicacion.component';


const routes: Routes = [
{
  path: '', component: HeaderFlujosComunicacionComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlujosRoutingModule { }
