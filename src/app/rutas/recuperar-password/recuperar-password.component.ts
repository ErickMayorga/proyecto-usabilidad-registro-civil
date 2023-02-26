import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CampoEntradaInterface } from 'src/app/interfaces/campo-entrada.interface';
import { TipoCampoEnum } from 'src/app/constants/tipo-campo.enum';
import { TipoMensajeEnum } from 'src/app/constants/tipo-mensaje.enum';
import { CampoEntradaService } from 'src/app/servicios/campo-entrada/campo-entrada.service';
import { MatDialog } from '@angular/material/dialog';
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
      nameField: 'Cédula',
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
  

  constructor(
    private campoEntradaService:CampoEntradaService,
    public dialog:MatDialog,
    private fb:FormBuilder
  ) { 
    this.formGroup = this.campoEntradaService.getFormGroup(this.campos)
  }

  ngOnInit(): void {
  }
  validarFormulario(){
    this.formGroup.addControl('new', this.fb.control(Validators.required))
  }
}
