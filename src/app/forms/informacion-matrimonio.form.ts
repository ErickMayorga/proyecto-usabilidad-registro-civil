import {CampoEntradaInterface} from "../interfaces/campo-entrada.interface";
import {TipoCampoEnum} from "../constants/tipo-campo.enum";
import {TipoMensajeEnum} from "../constants/tipo-mensaje.enum";

export const informacionMatrimonioForm: CampoEntradaInterface[] = [
  {
    type: TipoCampoEnum.TEXT,
    title: 'Tomo: ',
    nameField: 'tomo',
    helpText: 'Ingrese solo números)',
    screenReaderText: 'Ingrese el número de tomo de su acta de matrimonio',
    placeholder: 'Ingreso solo números',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
      {
        tipo: TipoMensajeEnum.LONGITUD,
        textoMensaje: 'La longitud de este campo es entre 5 y 8 caracteres',
        opciones: {min: 5, max: 8}
      },
    ],
    deshabilitar: true
  },

  {
    type: TipoCampoEnum.TEXT,
    title: 'Clase: ',
    nameField: 'clase',
    helpText: 'Ingrese solo números',
    screenReaderText: 'Ingrese la clase de su acta de matrimonio',
    placeholder: '...',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
      {
        tipo: TipoMensajeEnum.LONGITUD,
        textoMensaje: 'La longitud de este campo es entre 5 y 8 caracteres',
        opciones: {min: 5, max: 8}
      },
    ],
    deshabilitar: false
  },

  {
    type: TipoCampoEnum.TEXT,
    title: 'Pagina: ',
    nameField: 'pagina',
    helpText: 'Ingrese solo números',
    screenReaderText: 'Ingrese la página de su acta de matrimonio',
    placeholder: '...',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
      {
        tipo: TipoMensajeEnum.LONGITUD,
        textoMensaje: 'La longitud de este campo es entre 5 y 8 caracteres',
        opciones: {min: 5, max: 8}
      },
    ],
    deshabilitar: false
  },

  {
    type: TipoCampoEnum.TEXT,
    title: 'Acta: ',
    nameField: 'acta',
    helpText: 'Ingrese solo números',
    screenReaderText: 'Ingrese el número de su acta de matrimonio',
    placeholder: 'Ingrese solo números',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
      {
        tipo: TipoMensajeEnum.LONGITUD,
        textoMensaje: 'La longitud de este campo es entre 5 y 10 caracteres',
        opciones: {min: 5, max: 10}
      },
    ],
    deshabilitar: false
  },

  {
    type: TipoCampoEnum.TEXT,
    title: 'Lugar',
    nameField: 'lugar',
    helpText: 'Ingrese el lugar (Provincia, Ciudad, Parroquia) de su nacimiento',
    screenReaderText: "Ingrese el lugar (Provincia, Ciudad, Parroquia) de su nacimiento",
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
    deshabilitar: false
  },
]
