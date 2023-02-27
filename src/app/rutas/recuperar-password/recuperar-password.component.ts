import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CampoEntradaInterface } from 'src/app/interfaces/campo-entrada.interface';
import { TipoCampoEnum } from 'src/app/constants/tipo-campo.enum';
import { TipoMensajeEnum } from 'src/app/constants/tipo-mensaje.enum';
import { CampoEntradaService } from 'src/app/servicios/campo-entrada/campo-entrada.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificacionComponent } from 'src/app/componentes/notificacion/notificacion.component';
import { NotificacionInterface } from 'src/app/interfaces/notificacion.interface';
import { TipoNotificacionEnum } from 'src/app/constants/tipo-notificacion.enum';
import { BotonInterface } from 'src/app/interfaces/boton.interface';
import { TipoBotonEnum } from 'src/app/constants/tipo-boton.enum';
@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.scss']
})
export class RecuperarPasswordComponent implements OnInit {
  formGroup! : FormGroup;
  campos :CampoEntradaInterface[] = [
    {
      type: TipoCampoEnum.TEXT,
      title: 'Cédula',
      nameField: 'cedula',
      helpText: 'Ingrese su número de cédula',
      screenReaderText: 'Ingresar su número de cédula',
      placeholder:'Ej.:1713205541',
      mensajes: [
        {
          tipo:TipoMensajeEnum.LONGITUD,
          textoMensaje: 'La cédula contiene solo 10 caracteres númericos',
          opciones:{min:10,max:10}
        },
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'El campo cédula es obligatorio.'
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
    const valueCedula = this.formGroup.get('cedula')?.value
    if(valueCedula===this.cedulaRegistrada){
      this.router.navigateByUrl('/correo-confirmacion');
    }else{
      const notificacionOpciones: NotificacionInterface = {
        tipo: TipoNotificacionEnum.ERROR,
        titulo: 'Cédula No Registrada',
        contenido: 'Ups, hubo un error. Por favor, ingresa una cédula que ya se haya registrado anteriormente.',
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
