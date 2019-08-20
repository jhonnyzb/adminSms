import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

 import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutLoginComponent } from './Layouts/layout-login/layout-login.component';
import { LayoutUsuarioComponent } from './Layouts/layout-usuario/layout-usuario.component';
import { LayoutDeveloperComponent } from './Layouts/layout-developer/layout-developer.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutLoginComponent,
    LayoutUsuarioComponent,
    LayoutDeveloperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
