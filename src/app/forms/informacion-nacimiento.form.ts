import {CampoEntradaInterface} from "../interfaces/campo-entrada.interface";
import {TipoCampoEnum} from "../constants/tipo-campo.enum";
import {TipoMensajeEnum} from "../constants/tipo-mensaje.enum";

export const informacionNacimientoForm: CampoEntradaInterface[] = [
  {
    type: TipoCampoEnum.TEXT,
    title: 'Tomo: ',
    nameField: 'tomoNacimiento',
    helpText: 'Ingrese solo números)',
    screenReaderText: 'Ingrese el número de tomo de su acta de nacimiento',
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
    nameField: 'claseNacimiento',
    helpText: 'Ingrese solo números',
    screenReaderText: 'Ingrese la clase de su acta de nacimiento',
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
    nameField: 'paginaNacimiento',
    helpText: 'Ingrese solo números',
    screenReaderText: 'Ingrese la página de su acta de nacimiento',
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
    nameField: 'actaNacimiento',
    helpText: 'Ingrese solo números',
    screenReaderText: 'Ingrese el número de su acta de nacimiento',
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
    type: TipoCampoEnum.DATE,
    title: 'Año de inscripción:',
    nameField: 'añoInscripcion',
    helpText: 'Ingrese una fecha (dd/mm/aaaa)',
    screenReaderText: 'Ingrese el año de inscripcción en formato: dd/mm/aaaa',
    placeholder: '27/11/1999',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
    ],
    deshabilitar: false
  },

  {
    type: TipoCampoEnum.TEXT,
    title: 'Lugar',
    nameField: 'lugarNacimiento',
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
