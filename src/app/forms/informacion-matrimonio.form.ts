import {CampoEntradaInterface} from "../interfaces/campo-entrada.interface";
import {TipoCampoEnum} from "../constants/tipo-campo.enum";
import {TipoMensajeEnum} from "../constants/tipo-mensaje.enum";

export const informacionMatrimonioForm: CampoEntradaInterface[] = [
  {
    type: TipoCampoEnum.NUMBER,
    title: 'Tomo: ',
    nameField: 'tomoMatrimonio',
    helpText: 'Ingrese el número de tomo de su acta de matrimonio',
    screenReaderText: 'Número de tomo de su acta de matrimonio',
    placeholder: 'Ej: 123',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
    ],
    deshabilitar: true
  },
  {
    type: TipoCampoEnum.NUMBER,
    title: 'Clase: ',
    nameField: 'claseMatrimonio',
    helpText: 'Ingrese la clase de su acta de matrimonio',
    screenReaderText: 'Número de clase de su acta de matrimonio',
    placeholder: 'Ej: 123',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
    ],
    deshabilitar: true
  },
  {
    type: TipoCampoEnum.NUMBER,
    title: 'Pagina: ',
    nameField: 'paginaMatrimonio',
    helpText: 'Ingrese la página de su acta de matrimonio',
    screenReaderText: 'Número de página de su acta de matrimonio',
    placeholder: 'Ej: 123',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
    ],
    deshabilitar: true
  },

  {
    type: TipoCampoEnum.NUMBER,
    title: 'Acta: ',
    nameField: 'actaMatrimonio',
    helpText: 'Ingrese el número de su acta de matrimonio',
    screenReaderText: 'Número de su acta de matrimonio',
    placeholder: 'Ej: 123',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
    ],
    deshabilitar: true
  },

  {
    type: TipoCampoEnum.TEXT,
    title: 'Lugar',
    nameField: 'lugarMatrimonio',
    helpText: 'Ingrese el lugar (Provincia, Ciudad, Parroquia) de su matrimonio',
    screenReaderText: "Lugar de su matrimonio (Provincia, Ciudad, Parroquia)",
    placeholder: 'Prichincha, Quito, Belisario Quevedo',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
      {
        tipo: TipoMensajeEnum.LONGITUD,
        textoMensaje: 'La longitud de este campo es entre 25 y 30 caracteres',
        opciones: {min: 25, max: 30}
      },
    ],
    deshabilitar: true
  },
]
