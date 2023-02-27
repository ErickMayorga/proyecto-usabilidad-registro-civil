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
import {registroForm} from "../../forms/registro.form";


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

    formGroup!: FormGroup
    campos: CampoEntradaInterface[] = registroForm

    constructor(private readonly campoEntradaService: CampoEntradaService,
      public dialog: MatDialog, private readonly router: Router) {
      this.formGroup = this.campoEntradaService.getFormGroup(this.campos)
      this.formGroup.patchValue({
        nombres: 'Juan Pérez',
        cedula: localStorage.getItem('cedulaValidada') ? localStorage.getItem('cedulaValidada') : ''
      });
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

          abrirError4(){
            const botones: BotonInterface[] = [
              {tipo: TipoBotonEnum.ACEPTAR, texto: 'Aceptar', lectorTexto: 'Botón aceptar', nombreBoton: 'btnAceptar'},
            ]
            const notificacionOpciones: NotificacionInterface = {
              tipo: TipoNotificacionEnum.ERROR,
              titulo: 'Mensaje de error',
              contenido: 'Las contraseñas no coinciden!',
              botones: botones
            }
              this.mostrarNotificacion(notificacionOpciones)
            }

   validarCampos(){
    if(this.formGroup.get('cédula')?.value == ""){
        this.abrirError();
    }else if(this.formGroup.get('cedula')?.value == "1722334455"){
      this.abrirError2();
    }else if(isNaN(this.formGroup.get('cedula')?.value) ||
    isNaN(this.formGroup.get('teléfono convencional')?.value) ||
    isNaN(this.formGroup.get('teléfono celular')?.value)){
      this.abrirError3();
    }else if(this.formGroup.get('contraseña')?.value !=
      this.formGroup.get('confirmación de contraseña')?.value ){
        this.abrirError4();
    }else{
        this.abrirInformativo();
        this.router.navigateByUrl('/inicio-sesion');
    }
  }
}
