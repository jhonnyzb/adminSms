import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioflujoComponent } from './inicioflujo/inicioflujo.component';


const routes: Routes = [
  {
    path: '' , component: InicioflujoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlujoRoutingModule { }
