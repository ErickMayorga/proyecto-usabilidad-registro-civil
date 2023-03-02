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

    abrirExito(){
      const botones: BotonInterface[] = [
        {tipo: TipoBotonEnum.ACEPTAR, texto: 'Aceptar', lectorTexto: 'Botón aceptar', nombreBoton: 'btnAceptar'},
      ]
      const notificacionOpciones: NotificacionInterface = {
        tipo: TipoNotificacionEnum.EXITO,
        titulo: 'Registro Exitoso',
        contenido: 'Su nueva cuenta ha sido registrada con éxito!',
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
    abrirError(titulo: string, mensaje: string){
      const botones: BotonInterface[] = [
        {tipo: TipoBotonEnum.ACEPTAR, texto: 'Aceptar', lectorTexto: 'Botón aceptar', nombreBoton: 'btnAceptar'},
      ]
      const notificacionOpciones: NotificacionInterface = {
        tipo: TipoNotificacionEnum.ERROR,
        titulo: titulo,
        contenido: mensaje,
        botones: botones
      }
        this.mostrarNotificacion(notificacionOpciones)
    }

  validarCampos(){
    const telefonoConvencional = this.formGroup.get('teléfono convencional')?.value
    const telefonoCelular = this.formGroup.get('teléfono celular')?.value
    const password = this.formGroup.get('contraseña')?.value
    const passwordConfirmacion = this.formGroup.get('confirmación de contraseña')?.value
    console.log(telefonoConvencional, telefonoConvencional.length)
    console.log(telefonoCelular)
    console.log(password)
    console.log(passwordConfirmacion)
    console.log(this.formGroup.valid)

    /*if(telefonoConvencional || telefonoCelular.length === 0){
      this.abrirError('Error en ingreso de correo', 'Por favor, ingrese los campos de teléfono convencional y celular con solo números!');
    }else if(telefonoConvencional.length === 0 || telefonoCelular.length === 0){
      this.abrirError('Error en ingreso de número telefónico', 'Por favor, ingrese los campos de teléfono convencional y celular con solo números!');
    }else*/ if(password != passwordConfirmacion){
      this.abrirError('Error de confirmación de contraseña', 'Las contraseñas no coinciden! Por favor, inténtelo nuevamente');
    }else{
      const registroCookie = {
        cedula: localStorage.getItem('cedulaValidada') ? localStorage.getItem('cedulaValidada') : '',
        password: password
      }
      localStorage.setItem('registroInfo', JSON.stringify(registroCookie))

      this.abrirExito();
      this.router.navigateByUrl('/inicio-sesion');

    }
  }
}
