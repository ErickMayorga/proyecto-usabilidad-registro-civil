import { Component, OnInit } from '@angular/core';
import {Form, FormGroup} from "@angular/forms";
import {CampoEntradaInterface} from "../../interfaces/campo-entrada.interface";
import {CampoEntradaService} from "../../servicios/campo-entrada/campo-entrada.service";
import {MatDialog} from "@angular/material/dialog";
import {TipoCampoEnum} from "../../constants/tipo-campo.enum";
import {TipoMensajeEnum} from "../../constants/tipo-mensaje.enum";
import { NotificacionComponent } from 'src/app/componentes/notificacion/notificacion.component';
import { TipoBotonEnum } from 'src/app/constants/tipo-boton.enum';
import { TipoNotificacionEnum } from 'src/app/constants/tipo-notificacion.enum';
import { BotonInterface } from 'src/app/interfaces/boton.interface';
import { NotificacionInterface } from 'src/app/interfaces/notificacion.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validacion-cedula',
  templateUrl: './validacion-cedula.component.html',
  styleUrls: ['./validacion-cedula.component.scss']
})
export class ValidacionCedulaComponent implements OnInit {

  formGroup!: FormGroup
  campos: CampoEntradaInterface[] = [
    {
      type: TipoCampoEnum.TEXT,
      title: 'Cédula',
      nameField: 'cédula',
      helpText: 'Ingrese su número de cédula',
      screenReaderText: 'Screen Reader cédula',
      placeholder: 'Ej: 1702365445',
      mensajes: [
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'Este campo es requerido',
        },
        {
          tipo: TipoMensajeEnum.LONGITUD,
          textoMensaje: 'La longitud de este campo es de 10 caracteres',
          opciones: {min: 10, max: 10}
        }
      ],
      deshabilitar: false
    },
  ]

  constructor(private readonly campoEntradaService: CampoEntradaService,
    public dialog: MatDialog, private readonly router: Router) {
    this.formGroup = this.campoEntradaService.getFormGroup(this.campos)
}

//mensajes de validación
abrirError(){
  const botones: BotonInterface[] = [
    {tipo: TipoBotonEnum.ACEPTAR, texto: 'Aceptar', lectorTexto: 'Botón aceptar', nombreBoton: 'btnAceptar'},
  ]
  const notificacionOpciones: NotificacionInterface = {
    tipo: TipoNotificacionEnum.ERROR,
    titulo: 'Mensaje de error',
    contenido: 'Debe llenar este campo!',
    botones: botones
  }
    this.mostrarNotificacion(notificacionOpciones)
  }

  abrirError2(){
    const botones: BotonInterface[] = [
      {tipo: TipoBotonEnum.ACEPTAR, texto: 'Aceptar', lectorTexto: 'Botón aceptar', nombreBoton: 'btnAceptar'},
    ]
    const notificacionOpciones: NotificacionInterface = {
      tipo: TipoNotificacionEnum.ERROR,
      titulo: 'Mensaje de error',
      contenido: 'Usted ya esta registrado!',
      botones: botones
    }
      this.mostrarNotificacion(notificacionOpciones)
    }

    abrirError3(){
      const botones: BotonInterface[] = [
        {tipo: TipoBotonEnum.ACEPTAR, texto: 'Aceptar', lectorTexto: 'Botón aceptar', nombreBoton: 'btnAceptar'},
      ]
      const notificacionOpciones: NotificacionInterface = {
        tipo: TipoNotificacionEnum.ERROR,
        titulo: 'Mensaje de error',
        contenido: 'Ingrese solo números en este campo!',
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
  
   validarCedula(){
    if(this.formGroup.get('cédula')?.value == ""){
        this.abrirError();
        this.router.navigateByUrl('/validacion-cedula');
    }else if(this.formGroup.get('cédula')?.value == "1722334455"){
      this.abrirError2();
      this.router.navigateByUrl('/validacion-cedula');
    }else if(isNaN(this.formGroup.get('cédula')?.value)){
      this.abrirError3();
      this.router.navigateByUrl('/validacion-cedula');
    }
    else{
        this.router.navigateByUrl('/registro');
    }
  }

  ngOnInit(): void {
    
  }
}
