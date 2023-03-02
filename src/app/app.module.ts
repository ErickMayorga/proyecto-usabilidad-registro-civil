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
import {ValidacionCedulaComponent} from "./rutas/validacion-cedula/validacion-cedula.component";
import { ActualizarPasswordComponent } from './rutas/actualizar-password/actualizar-password.component';
import { CorreoConfirmacionComponent } from './rutas/correo-confirmacion/correo-confirmacion.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {environment} from "../environments/environment.prod";
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
  //return new TranslateHttpLoader(httpClient, '/assets/i18n/', '.json');
}

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
    VerificacionDatosPersonalesComponent,
    ValidacionCedulaComponent,
    RegistroComponent,
    ActualizarPasswordComponent,
    CorreoConfirmacionComponent,
    PiePaginaComponent,
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
    MatNativeDateModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
