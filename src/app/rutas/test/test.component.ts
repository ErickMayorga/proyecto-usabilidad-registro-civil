import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CampoEntradaInterface} from "../../interfaces/campo-entrada.interface";
import {TipoCampoEnum} from "../../constants/tipo-campo.enum";
import {CampoEntradaService} from "../../servicios/campo-entrada/campo-entrada.service";
import {TipoNotificacionEnum} from "../../constants/tipo-notificacion.enum";
import {MatDialog} from "@angular/material/dialog";
import {NotificacionComponent} from "../../componentes/notificacion/notificacion.component";
import {NotificacionInterface} from "../../interfaces/notificacion.interface";
import {BotonInterface} from "../../interfaces/boton.interface";
import {TipoBotonEnum} from "../../constants/tipo-boton.enum";
import {TipoMensajeEnum} from "../../constants/tipo-mensaje.enum";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  formGroup!: FormGroup
  tipoNotificacion = TipoNotificacionEnum
  campos: CampoEntradaInterface[] = [
    {
      type: TipoCampoEnum.TEXT,
      title: 'Campo',
      nameField: 'campo',
      helpText: 'Help text',
      screenReaderText: 'Screen Reader Field',
      placeholder: 'Placeholder',
      mensajes: [
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'Este campo es requerido',
        },
        {
          tipo: TipoMensajeEnum.LONGITUD,
          textoMensaje: 'La longitud de este campo es entre 5 y 8 caracteres',
          opciones: {min: 5, max: 8}
        },
      ],
      deshabilitar: false
    }
  ]

  constructor(private readonly campoEntradaService: CampoEntradaService,
              public dialog: MatDialog,) {
    this.formGroup = this.campoEntradaService.getFormGroup(this.campos)
  }

  ngOnInit(): void {
  }

  abrirError(){
    const botones: BotonInterface[] = [
      {tipo: TipoBotonEnum.ACEPTAR, texto: 'Aceptar', lectorTexto: 'Botón aceptar', nombreBoton: 'btnAceptar'},
    ]
    const notificacionOpciones: NotificacionInterface = {
      tipo: TipoNotificacionEnum.ERROR,
      titulo: 'Error',
      contenido: 'Mensaje de error',
      botones: botones
    }
    this.mostrarNotificacion(notificacionOpciones)
  }

  abrirConfirmacion(){
    const botones: BotonInterface[] = [
      {tipo: TipoBotonEnum.ACEPTAR, texto: 'Aceptar', lectorTexto: 'Botón aceptar', nombreBoton: 'btnAceptar'},
      {tipo: TipoBotonEnum.CANCELAR, texto: 'Cancelar', lectorTexto: 'Botón cancelar', nombreBoton: 'btnCancelar'},
    ]
    const notificacionOpciones: NotificacionInterface = {
      tipo: TipoNotificacionEnum.CONFIRMACION,
      titulo: 'Confirmación',
      contenido: 'Mensaje de confirmación',
      botones: botones
    }
    this.mostrarNotificacion(notificacionOpciones)
  }

  abrirInformativo(){
    const botones: BotonInterface[] = [
      {tipo: TipoBotonEnum.ACEPTAR, texto: 'Aceptar', lectorTexto: 'Botón aceptar', nombreBoton: 'btnAceptar'},
    ]
    const notificacionOpciones: NotificacionInterface = {
      tipo: TipoNotificacionEnum.INFORMATIVO,
      titulo: 'Informativo',
      contenido: 'Mensaje de información',
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
