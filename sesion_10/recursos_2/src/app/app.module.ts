import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlumnosComponent } from './alumnos/alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformsComponent,
    TemplateformsComponent,
    CursosComponent,
    AlumnosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
