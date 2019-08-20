import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagsHomeComponent } from './tags-home/tags-home.component';
import { CrearComunicacionTagsComponent } from './crear-comunicacion-tags/crear-comunicacion-tags.component';


const routes: Routes = [
  {
    path: '', component:  TagsHomeComponent
  },
  {
    path: 'createComunicacionTags', component: CrearComunicacionTagsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule { }
