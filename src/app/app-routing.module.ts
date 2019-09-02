import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutLoginComponent } from './Layouts/layout-login/layout-login.component';
import { LayoutUsuarioComponent } from './Layouts/layout-usuario/layout-usuario.component';
import { AdminGuard } from './guards/admin.guard';


const routes: Routes = [
  {
    path: '', component: LayoutLoginComponent
  },
  {
    path: 'usuario', component: LayoutUsuarioComponent, //canActivate: [AdminGuard],
    children:[
      {
        path: '',
        loadChildren: ()=> import ('./modulos/registros/registros.module').then(m=>m.RegistrosModule)
      },
      {
        path: 'tags',
        loadChildren: ()=> import ('./modulos/tags/tags.module').then(m=>m.TagsModule)
      },
      {
        path: 'flow',
        loadChildren: ()=> import ('./modulos/flujos/flujos.module').then(m=>m.FlujosModule)
      },
      {
        path: 'flow_2',
        loadChildren: ()=> import ('./modulos/flujo/flujo.module').then(m=>m.FlujoModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
