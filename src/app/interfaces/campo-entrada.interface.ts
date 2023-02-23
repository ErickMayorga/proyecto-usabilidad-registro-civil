import {FormGroup} from "@angular/forms";
import {TipoCampoEnum} from "../constants/tipo-campo.enum";
import {MensajeErrorInterface} from "./mensaje-error.interface";

export interface CampoEntradaInterface {
  type: TipoCampoEnum
  title: string
  nameField: string
  helpText: string
  screenReaderText: string
  placeholder?: string
  mensajes: MensajeErrorInterface[]
  deshabilitar: boolean
  opciones?: {clave: string, valor: string}[]
}
