import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
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
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

    formGroup!: FormGroup
    campos: CampoEntradaInterface[] = [
      {
        type: TipoCampoEnum.TEXT,
        title: 'Nombres',
        nameField: 'nombres',
        helpText: 'Ingrese sus nombres',
        screenReaderText: 'Screen Reader nombres',
        placeholder: 'Ingrese sus nombres',
        mensajes: [
          {
            tipo: TipoMensajeEnum.REQUERIDO,
            textoMensaje: 'Este campo es requerido',
          }
        ],
        deshabilitar: false
      },
      {
        type: TipoCampoEnum.TEXT,
        title: 'Cédula',
        nameField: 'cédula',
        helpText: 'Ingrese su cédula',
        screenReaderText: 'Screen Reader cédula',
        placeholder: 'Ej: 170102365445',
        mensajes: [
          {
            tipo: TipoMensajeEnum.REQUERIDO,
            textoMensaje: 'Este campo es requerido',
          },
          {
            tipo: TipoMensajeEnum.LONGITUD,
            textoMensaje: 'La longitud de este campo es de 10 caracteres',
            opciones: {min: 10}
          },
        ],
        deshabilitar: false
      },
      {
        type: TipoCampoEnum.PASSWORD,
        title: 'Contraseña',
        nameField: 'contraseña',
        helpText: 'Ingrese una contraseña',
        screenReaderText: 'Screen Reader contraseña',
        placeholder: 'Ingrese una contraseña',
        mensajes: [
          {
            tipo: TipoMensajeEnum.REQUERIDO,
            textoMensaje: 'Este campo es requerido',
          },
          {
            tipo: TipoMensajeEnum.LONGITUD,
            textoMensaje: 'La longitud de este campo es entre 5 y 8 caracteres',
            opciones: {min: 5, max: 8}
          }
        ],
        deshabilitar: false
      },
      {
        type: TipoCampoEnum.PASSWORD,
        title: 'Confirmación de contraseña',
        nameField: 'confirmación de contraseña',
        helpText: 'Ingrese nuevamente su contraseña',
        screenReaderText: 'Screen Reader confirmación de contraseña',
        placeholder: 'Ingrese nuevamente su contraseña',
        mensajes: [
          {
            tipo: TipoMensajeEnum.REQUERIDO,
            textoMensaje: 'Este campo es requerido',
          },
          {
            tipo: TipoMensajeEnum.LONGITUD,
            textoMensaje: 'La longitud de este campo es entre 5 y 8 caracteres',
            opciones: {min: 5, max: 8}
          }
        ],
        deshabilitar: false
      },
      {
        type: TipoCampoEnum.TEXT,
        title: 'Teléfono convencional',
        nameField: 'teléfono convencional',
        helpText: 'Ingrese su teléfono convencional',
        screenReaderText: 'Screen Reader teléfono convencional',
        placeholder: 'Ingrese su teléfono convencional',
        mensajes: [
          {
            tipo: TipoMensajeEnum.REQUERIDO,
            textoMensaje: 'Este campo es requerido',
          }
        ],
        deshabilitar: false
      },
      {
        type: TipoCampoEnum.TEXT,
        title: 'Teléfono celular',
        nameField: 'teléfono celular',
        helpText: 'Ingrese su teléfono celular',
        screenReaderText: 'Screen Reader teléfono celular',
        placeholder: 'Ingrese su teléfono celular',
        mensajes: [
          {
            tipo: TipoMensajeEnum.REQUERIDO,
            textoMensaje: 'Este campo es requerido',
          },
          {
            tipo: TipoMensajeEnum.LONGITUD,
            textoMensaje: 'La longitud de este campo es de 10 caracteres',
            opciones: {min: 10}
          }
        ],
        deshabilitar: false
      },
      {
        type: TipoCampoEnum.EMAIL,
        title: 'Correo electrónico',
        nameField: 'correo electrónico',
        helpText: 'Ingrese su correo electrónico',
        screenReaderText: 'Screen Reader correo electrónico',
        placeholder: 'Ingrese su correo electrónico',
        mensajes: [
          {
            tipo: TipoMensajeEnum.REQUERIDO,
            textoMensaje: 'Este campo es requerido',
          }
        ],
        deshabilitar: false
      },
    ]


    constructor(private readonly campoEntradaService: CampoEntradaService,
      public dialog: MatDialog,) {
      this.formGroup = this.campoEntradaService.getFormGroup(this.campos)
    }

    ngOnInit(): void {
    }

    abrirInformativo(){
      const botones: BotonInterface[] = [
        {tipo: TipoBotonEnum.ACEPTAR, texto: 'Aceptar', lectorTexto: 'Botón aceptar', nombreBoton: 'btnAceptar'},
      ]
      const notificacionOpciones: NotificacionInterface = {
        tipo: TipoNotificacionEnum.INFORMATIVO,
        titulo: 'Mensaje de éxito',
        contenido: 'Se ha registrado con éxito!',
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
