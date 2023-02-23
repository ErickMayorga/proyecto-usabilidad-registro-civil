import {TipoNotificacionEnum} from "../constants/tipo-notificacion.enum";
import {BotonInterface} from "./boton.interface";

export interface NotificacionInterface {
  tipo: TipoNotificacionEnum
  titulo: string
  contenido: string
  botones: BotonInterface[]
}
