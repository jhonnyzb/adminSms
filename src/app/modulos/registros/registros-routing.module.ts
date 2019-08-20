import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroHomeComponent } from './registro-home/registro-home.component';
import { RegistroPersonaComponent } from './registro-persona/registro-persona.component';
import { CrearComunicacionComponent } from './crear-comunicacion/crear-comunicacion.component';


const routes: Routes = [
  {
    path: '', component: RegistroHomeComponent
  },
  {
    path: 'personal', component: RegistroPersonaComponent
  },
  {
    path: 'comunicacion/:id/:idtag', component: CrearComunicacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrosRoutingModule { }
