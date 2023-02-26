import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CampoEntradaInterface} from "../../interfaces/campo-entrada.interface";
import {CampoEntradaService} from "../../servicios/campo-entrada/campo-entrada.service";
import {MatDialog} from "@angular/material/dialog";
import {TipoCampoEnum} from "../../constants/tipo-campo.enum";
import {TipoMensajeEnum} from "../../constants/tipo-mensaje.enum";

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
      nameField: 'campo',
      helpText: 'Ingrese su número de cédula',
      screenReaderText: 'Screen Reader cédula',
      placeholder: 'Ingrese su número de cédula',
      mensajes: [
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'Este campo es requerido',
        },
        {
          tipo: TipoMensajeEnum.LONGITUD,
          textoMensaje: 'La longitud de este campo es de 10 caracteres',
          opciones: {min: 10}
        },
      ],
      deshabilitar: false
    },
    {
      type: TipoCampoEnum.DATE,
      title: 'Fecha',
      nameField: 'fecha',
      helpText: 'Seleccione su fecha de nacimiento o ingrese manualmente',
      screenReaderText: 'Screen Reader fecha',
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
  constructor(private readonly campoEntradaService: CampoEntradaService,
    public dialog: MatDialog,) {
    this.formGroup = this.campoEntradaService.getFormGroup(this.campos)
}

  ngOnInit(): void {
  }
}
