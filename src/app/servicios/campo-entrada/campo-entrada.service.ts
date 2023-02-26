import {Injectable} from '@angular/core';
import {CampoEntradaInterface} from "../../interfaces/campo-entrada.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TipoMensajeEnum} from "../../constants/tipo-mensaje.enum";
import {MensajeErrorInterface} from "../../interfaces/mensaje-error.interface";

@Injectable({
  providedIn: 'root'
})
export class CampoEntradaService {

  constructor(private readonly formBuilder: FormBuilder) { }

  getFormGroup(campos: CampoEntradaInterface[]){
    let controls: any = {}
    for(let campo of campos){
      controls[campo.nameField] = ['', this.getValidators(campo.mensajes)]
    }
    return this.formBuilder.group(controls)
  }

  getValidators(mensajes: MensajeErrorInterface[]){
    const validators: any = []
    for(let mensaje of mensajes){
      switch (mensaje.tipo){
        case TipoMensajeEnum.REQUERIDO:
          validators.push(Validators.required)
          break
        case TipoMensajeEnum.LONGITUD:
          validators.push(Validators.minLength(mensaje.opciones.min))
          validators.push(Validators.maxLength(mensaje.opciones.max))
          break
        case TipoMensajeEnum.VALIDEZ:
          validators.push(Validators.email)
          break
        default:
          console.log('Bad Type')
          break
      }
    }
    return validators
  }

  obtenerMensajeValidacion(campo: CampoEntradaInterface, formGroup: FormGroup){
    const esInvalido = formGroup.get(campo.nameField)?.invalid
    const haSidoTocado = formGroup.get(campo.nameField)?.touched
    const contieneValor = formGroup.get(campo.nameField)?.dirty
    const hayErrorLongitud = formGroup.get(campo.nameField)?.hasError('minlength') ||
      formGroup.get(campo.nameField)?.hasError('maxlength')

    /*
    console.log(`Ha sido tocado: ${haSidoTocado}\n`,
      `Contiene valor: ${contieneValor}\n`,
      `Es invalido: ${esInvalido}\n`,
      `Error de longitud: ${hayErrorLongitud}`)
     */

    if(haSidoTocado && contieneValor && esInvalido && !hayErrorLongitud){
      const mensajeFiltrado = campo.mensajes.find(
        (mensaje) => mensaje.tipo === TipoMensajeEnum.REQUERIDO
      )
      return {
        mensaje: mensajeFiltrado!.textoMensaje ? mensajeFiltrado!.textoMensaje : 'Error validación requerido',
        error: true
      }
    }

    if(haSidoTocado && contieneValor && hayErrorLongitud){
      const mensajeFiltrado = campo.mensajes.find(
        (mensaje) => mensaje.tipo === TipoMensajeEnum.LONGITUD
      )
      return {
        mensaje: mensajeFiltrado!.textoMensaje ? mensajeFiltrado!.textoMensaje : 'Error validación longitud',
        error: true
      }
    }

    return {
      mensaje: campo.helpText ? campo.helpText : 'Error validación vacía',
      error: false
    }
  }


}
