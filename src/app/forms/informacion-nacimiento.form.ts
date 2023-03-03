import {CampoEntradaInterface} from "../interfaces/campo-entrada.interface";
import {TipoCampoEnum} from "../constants/tipo-campo.enum";
import {TipoMensajeEnum} from "../constants/tipo-mensaje.enum";

export const informacionNacimientoForm: CampoEntradaInterface[] = [
  {
    type: TipoCampoEnum.NUMBER,
    title: 'Tomo: ',
    nameField: 'tomoNacimiento',
    helpText: 'Ingrese el número de su acta de nacimiento (solo números)',
    screenReaderText: 'Número de tomo de su acta de nacimiento',
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
    nameField: 'claseNacimiento',
    helpText: 'Ingrese la clase de su acta de nacimiento (solo números)',
    screenReaderText: 'Clase de su acta de nacimiento (solo números)',
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
    nameField: 'paginaNacimiento',
    helpText: 'Ingrese solo números',
    screenReaderText: 'Ingrese la página de su acta de nacimiento',
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
    nameField: 'actaNacimiento',
    helpText: 'el número de su acta de nacimiento',
    screenReaderText: 'Número de su acta de nacimiento',
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
    type: TipoCampoEnum.DATE,
    title: 'Fecha de inscripción:',
    nameField: 'fechaInscripcion',
    helpText: 'Ingrese la fecha de inscripción (dd/mm/aaaa)',
    screenReaderText: 'Fecha de inscripción en formato: dd/mm/aaaa',
    placeholder: 'Ej. 27/11/1999',
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
    nameField: 'lugarNacimiento',
    helpText: 'Ingrese el lugar (Provincia, Ciudad, Parroquia) de su nacimiento',
    screenReaderText: "Lugar de su nacimiento (Provincia, Ciudad, Parroquia)",
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
