import {CampoEntradaInterface} from "../../interfaces/campo-entrada.interface";
import {TipoCampoEnum} from "../../constants/tipo-campo.enum";
import {TipoMensajeEnum} from "../../constants/tipo-mensaje.enum";

export const provincias = [
  {clave: "1", valor: "Pichincha"},
  {clave: "2", valor: "Latacunga"},
  {clave: "3", valor: "Carchi"},

]

export const camposLugar: CampoEntradaInterface[] = [
  {
    type: TipoCampoEnum.SELECT,
    title: 'Provincia',
    nameField: 'provincia',
    helpText: 'Seleccione una provincia',
    screenReaderText: 'Provincia',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
    ],
    deshabilitar: false,
    opciones: provincias
  },
  {
    type: TipoCampoEnum.SELECT,
    title: 'Ciudad',
    nameField: 'ciudad',
    helpText: 'Seleccione una ciudad',
    screenReaderText: 'Ciudad',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
    ],
    deshabilitar: false,
    opciones: provincias
  },
  {
    type: TipoCampoEnum.SELECT,
    title: 'Parroquia',
    nameField: 'parroquia',
    helpText: 'Seleccione una parroquia',
    screenReaderText: 'Parroquia',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
    ],
    deshabilitar: false,
    opciones: provincias
  },
]
