import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioSesionComponent } from './rutas/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './rutas/registro/registro.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { RecuperarPasswordComponent } from './rutas/recuperar-password/recuperar-password.component';
import {MatIconModule} from "@angular/material/icon";
import { BarraMenuComponent } from './componentes/barra-menu/barra-menu.component';
import { NotificacionComponent } from './componentes/notificacion/notificacion.component';
import { CampoEntradaComponent } from './componentes/campo-entrada/campo-entrada.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {CommonModule} from "@angular/common";
import { TestComponent } from './rutas/test/test.component';
import { VerificacionDatosPersonalesComponent } from './rutas/verificacion-datos-personales/verificacion-datos-personales.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    RegistroComponent,
    CabeceraComponent,
    RecuperarPasswordComponent,
    BarraMenuComponent,
    NotificacionComponent,
    CampoEntradaComponent,
    TestComponent,
    VerificacionDatosPersonalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    CommonModule,
    MatExpansionModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
