import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  selector: 'app-actualizar-password',
  templateUrl: './actualizar-password.component.html',
  styleUrls: ['./actualizar-password.component.scss']
})
export class ActualizarPasswordComponent implements OnInit {
  formGroup! : FormGroup;
  campos :CampoEntradaInterface[] = [
    {
      type: TipoCampoEnum.PASSWORD,
      title: 'Nueva Contraseña',
      nameField: 'newPassword',
      helpText: 'Ingrese su nueva contraseña:',
      screenReaderText: 'Ingresar su nueva contraseña',
      placeholder:'*****',
      mensajes: [
        {
          tipo:TipoMensajeEnum.LONGITUD,
          textoMensaje: 'La contraseña debe tener mínimo 8 caracteres',
          opciones:{min:8}
        },
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'La nueva contraseña no puede estar vacía'
        },

      ],
      deshabilitar:false
    },
    {
      type: TipoCampoEnum.PASSWORD,
      title: 'Confirmar Contraseña',
      nameField: 'confirmNewPassword',
      helpText: 'Confirme su nueva contraseña',
      screenReaderText: 'Confirmar su nueva contraseña',
      placeholder:'*****',
      mensajes: [
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'La nueva contraseña no puede estar vacía'
        },

      ],
      deshabilitar:false
    }
  ]
  cedulaRegistrada="1722334455"
  constructor(
    private campoEntradaService:CampoEntradaService,
    public dialog:MatDialog,
    private router:Router
  ) { 
    this.formGroup = this.campoEntradaService.getFormGroup(this.campos)
  }

  ngOnInit(): void {
  }
  
  validarFormulario(){
    const botones: BotonInterface[] = [
      {tipo: TipoBotonEnum.ACEPTAR, texto: 'Aceptar', lectorTexto: 'Botón aceptar', nombreBoton: 'btnAceptar'},
    ]
    const valuePassword = this.formGroup.get('newPassword')?.value
    const valueConfirmacion = this.formGroup.get('confirmNewPassword')?.value
    if(valuePassword===valueConfirmacion){
      const notificacionOpciones: NotificacionInterface = {
        tipo: TipoNotificacionEnum.INFORMATIVO,
        titulo: 'Actualización de Contraseña Exitosa',
        contenido: 'Se ha actualizado la contraseña correctamente. Vuelve a ingresar al sistema con tu nueva contraseña.',
        botones: botones
      }
      this.mostrarNotificacion(notificacionOpciones)
    }else{
      const notificacionOpciones: NotificacionInterface = {
        tipo: TipoNotificacionEnum.ERROR,
        titulo: 'Contraseña Incorrecta',
        contenido: 'Ups, hubo un error. Por favor, deben coincidir la contraseña y la confirmación.',
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
