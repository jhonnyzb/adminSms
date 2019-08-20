import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrosRoutingModule } from './registros-routing.module';
import { RegistroHomeComponent } from './registro-home/registro-home.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe';
import { RegistroPersonaComponent } from './registro-persona/registro-persona.component';
import { CrearComunicacionComponent } from './crear-comunicacion/crear-comunicacion.component';


@NgModule({
  declarations: [RegistroHomeComponent,SearchPipe, RegistroPersonaComponent, CrearComunicacionComponent],
  imports: [
    CommonModule,
    RegistrosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class RegistrosModule { }
