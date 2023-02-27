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
import {TraduccionService} from "../../servicios/traduccion/traduccion.service";

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
      title: 'Nombre',
      nameField: 'campo',
      helpText: 'Ingrese un valor de texto',
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
    },
    {
      type: TipoCampoEnum.CHECKBOX,
      title: 'Checkbox field',
      nameField: 'checkField',
      helpText: ' ',
      screenReaderText: 'Screen Reader Checkbox',
      mensajes: [
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'Este campo es requerido',
        },
      ],
      deshabilitar: false
    },
    {
      type: TipoCampoEnum.SELECT,
      title: 'Select field',
      nameField: 'selectField',
      helpText: 'Seleccione un valor',
      screenReaderText: 'Screen Reader Select',
      mensajes: [
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'Este campo es requerido',
        },
      ],
      deshabilitar: false,
      opciones: [
        {clave: "1", valor: "Opcion 1"},
        {clave: "2", valor: "Opcion 2"},
        {clave: "3", valor: "Opcion 3"},
        {clave: "4", valor: "Opcion 4"},
      ]
    },
    {
      type: TipoCampoEnum.DATE,
      title: 'Fecha',
      nameField: 'fecha',
      helpText: 'Ingrese una fecha',
      screenReaderText: 'Screen Reader Fecha',
      placeholder: 'DD/MM/YYYY',
      mensajes: [
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'Este campo es requerido',
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
      placeholder: '*****',
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
    },
  ]

  constructor(private readonly campoEntradaService: CampoEntradaService,
              public dialog: MatDialog,
              public translateService: TraduccionService) {
    this.formGroup = this.campoEntradaService.getFormGroup(this.campos)
    localStorage.setItem("variable", "45")
    const valor = localStorage.getItem("variable")
    console.log(valor)
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

  abrirExito(){
    const botones: BotonInterface[] = [
      {tipo: TipoBotonEnum.ACEPTAR, texto: 'Aceptar', lectorTexto: 'Botón aceptar', nombreBoton: 'btnAceptar'},
    ]
    const notificacionOpciones: NotificacionInterface = {
      tipo: TipoNotificacionEnum.EXITO,
      titulo: 'Acción exitosa',
      contenido: 'Mensaje de éxito',
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

  mostrarCampoInconsistencia(campo: CampoEntradaInterface){
    if(campo.editable === undefined){
      campo.editable = true
    }else{
      campo.editable = !campo.editable
    }
  }

  enviar(){
    this.abrirInformativo()
  }

}
