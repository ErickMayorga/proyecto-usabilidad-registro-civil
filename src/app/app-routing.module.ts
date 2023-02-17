import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './rutas/inicio-sesion/inicio-sesion.component';
import {RecuperarPasswordComponent} from "./rutas/recuperar-password/recuperar-password.component";

const routes: Routes = [
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'recuperar-password', component: RecuperarPasswordComponent },

  { path: '', redirectTo: '/inicio-sesion', pathMatch: 'full' },
  //{ path: '**', component: InicioSesionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
