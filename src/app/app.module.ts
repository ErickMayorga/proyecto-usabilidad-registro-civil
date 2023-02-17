import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioSesionComponent } from './rutas/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './rutas/registro/registro.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { RecuperarPasswordComponent } from './rutas/recuperar-password/recuperar-password.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    RegistroComponent,
    CabeceraComponent,
    RecuperarPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
