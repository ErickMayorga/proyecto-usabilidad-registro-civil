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
import {informacionBasicaForm} from "../../forms/informacion-basica.form";
import {informacionAdicionalForm} from "../../forms/informacion-adicional.form";
import {informacionNacimientoForm} from "../../forms/informacion-nacimiento.form";
import {informacionMatrimonioForm} from "../../forms/informacion-matrimonio.form";
import {Router} from "@angular/router";

@Component({
  selector: 'app-verificacion-datos-personales',
  templateUrl: './verificacion-datos-personales.component.html',
  styleUrls: ['./verificacion-datos-personales.component.scss']
})
export class VerificacionDatosPersonalesComponent implements OnInit {

  formGroup!: FormGroup
  tipoNotificacion = TipoNotificacionEnum

  //CAMPOS INFORMACIoN BaSICA
  camposInfBasica: CampoEntradaInterface[] = informacionBasicaForm

  //CAMPOS INFORMACIÓN ADICIONAL
  camposInfAdicional: CampoEntradaInterface[] = informacionAdicionalForm

  //CAMPOS INFORMACIÓN DE NACIMIENTO
  camposInfNacimiento: CampoEntradaInterface[] =informacionNacimientoForm

  //CAMPOS INFORMACIÓN DE MATRIMONIO
  camposInfMatrimonio: CampoEntradaInterface[] = informacionMatrimonioForm

  //TERMINOS Y SERVICIOS
  campoCheckNotificacion: CampoEntradaInterface[] = [
    {
      type: TipoCampoEnum.CHECKBOX,
      title: 'Estoy de acuerdo con los términos y condiciones establecidas',
      nameField: 'checkField',
      helpText: ' ',
      screenReaderText: 'Checkbox para aceptar los términos y condiciones establecidas',
      mensajes: [
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'Para continuar debe estar de acuerdo con los términos y condiciones establecidas',
        },
      ],
      deshabilitar: false
    },
  ]

  //CAMPOS DE LUGAR
  camposLugar = camposLugar

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  constructor(private readonly campoEntradaService: CampoEntradaService,
              public dialog: MatDialog,
              private readonly router: Router,) {
    let camposGeneral: CampoEntradaInterface[] = []
    camposGeneral = camposGeneral.concat(this.camposInfBasica)
    camposGeneral = camposGeneral.concat(this.camposInfAdicional)
    camposGeneral = camposGeneral.concat(this.camposInfNacimiento)
    camposGeneral = camposGeneral.concat(this.camposInfMatrimonio)
    camposGeneral = camposGeneral.concat(this.campoCheckNotificacion)
    this.formGroup = this.campoEntradaService.getFormGroup(camposGeneral)
  }

  ngOnInit(): void {
  }

  abrirConfirmacion(){
    const botones: BotonInterface[] = [
      {tipo: TipoBotonEnum.ACEPTAR, texto: 'SI, CONTINUAR', lectorTexto: 'Botón aceptar', nombreBoton: 'btnAceptar'},
      {tipo: TipoBotonEnum.CANCELAR, texto: 'VOLVER', lectorTexto: 'Botón cancelar', nombreBoton: 'btnCancelar'},
    ]
    const notificacionOpciones: NotificacionInterface = {
      tipo: TipoNotificacionEnum.CONFIRMACION,
      titulo: 'ADVERTENCIA',
      contenido: 'Las inconsistencias generadas se enviarán al servicio del Registro Civil para su corrección. ' +
                 '¿Está seguro de que la información ingresada es correcta?',
      botones: botones
    }
    this.mostrarNotificacion(notificacionOpciones, '/verificacion-datos-personales')
  }

  abrirConfirmacionCerrarSesion(){
    const botones: BotonInterface[] = [
      {tipo: TipoBotonEnum.ACEPTAR, texto: 'SI, SALIR', lectorTexto: 'Botón aceptar', nombreBoton: 'btnAceptar'},
      {tipo: TipoBotonEnum.CANCELAR, texto: 'CANCELAR', lectorTexto: 'Botón cancelar', nombreBoton: 'btnCancelar'},
    ]
    const notificacionOpciones: NotificacionInterface = {
      tipo: TipoNotificacionEnum.CONFIRMACION,
      titulo: 'ADVERTENCIA',
      contenido: '¿Está seguro de que quiere salir?',
      botones: botones
    }
    this.mostrarNotificacion(notificacionOpciones, '/inicio-sesion')
  }

  mostrarCampoInconsistencia(campo: CampoEntradaInterface){
    if(campo.editable === undefined){
      campo.editable = true
    }else{
      campo.editable = !campo.editable
    }
  }

  mostrarNotificacion(notificacionOpciones: NotificacionInterface, redirectTo: string){
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
        if(datos!=undefined && datos['accion'] === TipoBotonEnum.ACEPTAR){
          this.router.navigateByUrl(redirectTo)
        }
      }
    )
  }
}
