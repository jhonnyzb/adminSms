import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsHomeComponent } from './tags-home/tags-home.component';
import { CrearComunicacionTagsComponent } from './crear-comunicacion-tags/crear-comunicacion-tags.component';


@NgModule({
  declarations: [TagsHomeComponent, CrearComunicacionTagsComponent],
  imports: [
    CommonModule,
    TagsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TagsModule { }
