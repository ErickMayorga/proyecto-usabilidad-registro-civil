import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {BotonInterface} from "../../interfaces/boton.interface";
import {TipoBotonEnum} from "../../constants/tipo-boton.enum";
import {NotificacionInterface} from "../../interfaces/notificacion.interface";
import {TipoNotificacionEnum} from "../../constants/tipo-notificacion.enum";
import {NotificacionComponent} from "../../componentes/notificacion/notificacion.component";
import {CampoEntradaService} from "../../servicios/campo-entrada/campo-entrada.service";
import {MatDialog} from "@angular/material/dialog";
import {FormGroup} from "@angular/forms";
import {CampoEntradaInterface} from "../../interfaces/campo-entrada.interface";
import {TipoCampoEnum} from "../../constants/tipo-campo.enum";
import {TipoMensajeEnum} from "../../constants/tipo-mensaje.enum";
import {camposLugar} from "./lugar.const";

@Component({
  selector: 'app-verificacion-datos-personales',
  templateUrl: './verificacion-datos-personales.component.html',
  styleUrls: ['./verificacion-datos-personales.component.scss']
})
export class VerificacionDatosPersonalesComponent implements OnInit {

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
      type: TipoCampoEnum.TEXT,
      title: 'Lugar',
      nameField: 'lugar',
      helpText: 'Ingrese un lugar',
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
  ]

  camposLugar = camposLugar

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  constructor(private readonly campoEntradaService: CampoEntradaService,
              public dialog: MatDialog,) {
    this.campos = this.campos.concat(camposLugar)
    this.formGroup = this.campoEntradaService.getFormGroup(this.campos)
  }

  ngOnInit(): void {
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

  mostrarCampoInconsistencia(campo: CampoEntradaInterface){
    if(campo.editable === undefined){
      campo.editable = true
    }else{
      campo.editable = !campo.editable
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
