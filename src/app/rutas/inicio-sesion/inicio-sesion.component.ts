import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {
  formGroup!: FormGroup
  tipoNotificacion = TipoNotificacionEnum
  campos: CampoEntradaInterface[] = [
    {
      type: TipoCampoEnum.TEXT,
      title: 'Cédula:',
      nameField: 'campo',
      helpText: 'Ingrese su número de cédula',
      screenReaderText: 'Screen Reader Field',
      placeholder: 'Ej. 1765432101',
      mensajes: [
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'Este campo es requerido',
        },
        {
          tipo: TipoMensajeEnum.LONGITUD,
          textoMensaje: 'La longitud de este campo es de 10 caracteres',
          opciones: {min: 10, max: 10}
        },
      ],
      deshabilitar: false
    },
    {
      type: TipoCampoEnum.TEXT,
      title: 'Contraseña:',
      nameField: 'campo',
      helpText: 'Ingrese la contraseña',
      screenReaderText: 'Screen Reader Field',
      placeholder: '*********',
      mensajes: [
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'Este campo es requerido',
        },
        {
          tipo: TipoMensajeEnum.LONGITUD,
          textoMensaje: 'La longitud de este campo esta entre 8 y 12 caracteres',
          opciones: {min: 8, max: 12}
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

  

}
