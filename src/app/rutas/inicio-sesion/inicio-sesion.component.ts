import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {Router, RouterLink, RouterStateSnapshot} from '@angular/router';
import { NotificacionComponent } from 'src/app/componentes/notificacion/notificacion.component';
import { TipoBotonEnum } from 'src/app/constants/tipo-boton.enum';
import { TipoCampoEnum } from 'src/app/constants/tipo-campo.enum';
import { TipoMensajeEnum } from 'src/app/constants/tipo-mensaje.enum';
import { TipoNotificacionEnum } from 'src/app/constants/tipo-notificacion.enum';
import { BotonInterface } from 'src/app/interfaces/boton.interface';
import { CampoEntradaInterface } from 'src/app/interfaces/campo-entrada.interface';
import { NotificacionInterface } from 'src/app/interfaces/notificacion.interface';
import { CampoEntradaService } from 'src/app/servicios/campo-entrada/campo-entrada.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  formGroup!: FormGroup
  tipoNotificacion = TipoNotificacionEnum
  campos: CampoEntradaInterface[] = [
    {
      type: TipoCampoEnum.TEXT,
      title: 'Cédula:',
      nameField: 'cedula',
      helpText: 'Ingrese su número de cédula',
      screenReaderText: 'Screen Reader Field',
      placeholder: 'Ej. 1765432101',
      mensajes: [
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'Este campo es requerido',
        },
        {
          tipo: TipoMensajeEnum.LONGITUD,
          textoMensaje: 'La longitud de este campo es de 10 caracteres',
          opciones: {min: 10, max: 10}
        },
      ],
      deshabilitar: false
    },
    {
      type: TipoCampoEnum.PASSWORD,
      title: 'Contraseña',
      nameField: 'clave',
      helpText: 'Ingrese una contraseña',
      screenReaderText: 'Screen Reader Password',
      placeholder: '********',
      mensajes: [
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'Este campo es requerido',
        },
        {
          tipo: TipoMensajeEnum.LONGITUD,
          textoMensaje: 'La longitud de este campo es de entre 8 y 12 caracteres',
          opciones: {min: 8, max: 12}
        },
      ],
      deshabilitar: false
    },
  ]
  constructor(private readonly campoEntradaService: CampoEntradaService,
              public dialog: MatDialog,
              private readonly router: Router,) {
this.formGroup = this.campoEntradaService.getFormGroup(this.campos)
}

  ngOnInit(): void {
  }

  autentificar(){
    const botones: BotonInterface[] = [
      {tipo: TipoBotonEnum.ACEPTAR, texto: 'Aceptar', lectorTexto: 'Botón aceptar', nombreBoton: 'btnAceptar'},
    ]

    if (this.formGroup.get('cedula')?.value== '1722334455' && this.formGroup.get('clave')?.value=='Clave123') {
      this.router.navigateByUrl('/verificacion-datos-personales')
    }else{
      const notificacionOpciones: NotificacionInterface = {
        tipo: TipoNotificacionEnum.ERROR,
        titulo: 'Cédula o contraseña incorrecta',
        contenido: 'Ups, hubo un error. Por favor, intenta ingresando nuevamente tu cédula y contraseña',
        botones: botones
      }
      this.mostrarNotificacion(notificacionOpciones)
    }
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
