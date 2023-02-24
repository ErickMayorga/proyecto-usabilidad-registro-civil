import {TipoMensajeEnum} from "../constants/tipo-mensaje.enum";

export interface MensajeErrorInterface {
  tipo: TipoMensajeEnum
  textoMensaje: string
  opciones?: any
}
