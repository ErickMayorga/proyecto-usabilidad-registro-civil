import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarPasswordComponent } from './rutas/actualizar-password/actualizar-password.component';
import { CorreoConfirmacionComponent } from './rutas/correo-confirmacion/correo-confirmacion.component';
import { InicioSesionComponent } from './rutas/inicio-sesion/inicio-sesion.component';
import {RecuperarPasswordComponent} from "./rutas/recuperar-password/recuperar-password.component";
import { RegistroComponent } from './rutas/registro/registro.component';
import { ValidacionCedulaComponent } from './rutas/validacion-cedula/validacion-cedula.component';
import {TestComponent} from "./rutas/test/test.component";

const routes: Routes = [
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'recuperar-password', component: RecuperarPasswordComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'validacion-cedula', component: ValidacionCedulaComponent},
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: '/inicio-sesion', pathMatch: 'full' },
  { path: 'actualizar-password', component: ActualizarPasswordComponent},
  { path: 'correo-confirmacion', component: CorreoConfirmacionComponent },
  //{ path: '**', component: InicioSesionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
