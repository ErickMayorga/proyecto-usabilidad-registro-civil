import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificacionComponent } from 'src/app/componentes/notificacion/notificacion.component';
import { TipoBotonEnum } from 'src/app/constants/tipo-boton.enum';
import { TipoNotificacionEnum } from 'src/app/constants/tipo-notificacion.enum';
import { BotonInterface } from 'src/app/interfaces/boton.interface';
import { NotificacionInterface } from 'src/app/interfaces/notificacion.interface';

@Component({
  selector: 'app-correo-confirmacion',
  templateUrl: './correo-confirmacion.component.html',
  styleUrls: ['./correo-confirmacion.component.scss']
})
export class CorreoConfirmacionComponent implements OnInit {
  
  cedulaRegistrada="1722334455"
  constructor(
    public dialog:MatDialog,
    private router:Router
  ) {
   }

  ngOnInit(): void {
  }
  validarFormulario(){
    const botones: BotonInterface[] = [
      {tipo: TipoBotonEnum.ACEPTAR, texto: 'Aceptar', lectorTexto: 'Botón aceptar', nombreBoton: 'btnAceptar'},
    ]
    this.router.navigateByUrl('/correo-confirmacion');
    const notificacionOpciones: NotificacionInterface = {
      tipo: TipoNotificacionEnum.ERROR,
      titulo: 'Contraseña Incorrecta',
      contenido: 'Ups, hubo un error. Por favor, deben coincidir la contraseña y la confirmación.',
      botones: botones
    }
    this.mostrarNotificacion(notificacionOpciones)
  }

  mostrarNotificacion(notificacionOpciones: NotificacionInterface){
    // Apertura de notificacion
    const referenciaDialogo = this.dialog.open(
      NotificacionComponent,
      {
        disableClose: false,
        width: '60%',
        data: {
          opciones: notificacionOpciones
        }
      }
    )

    // Cerrado de notificacion
    referenciaDialogo.afterClosed().subscribe(
      (datos) => {
        if(datos!=undefined){
          const accion = datos['accion']
          console.log(accion)
        }
      }
    )
  }
}
