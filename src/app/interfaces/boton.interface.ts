import {TipoBotonEnum} from "../constants/tipo-boton.enum";

export interface BotonInterface {
  tipo: TipoBotonEnum
  texto: string
  lectorTexto: string
  nombreBoton: string
}
