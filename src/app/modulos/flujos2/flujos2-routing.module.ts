import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagramaFlujoComponent } from './diagrama-flujo/diagrama-flujo.component';


const routes: Routes = [
  {
    path: '', component: DiagramaFlujoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Flujos2RoutingModule { }
