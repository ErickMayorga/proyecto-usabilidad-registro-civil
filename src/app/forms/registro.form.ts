import {CampoEntradaInterface} from "../interfaces/campo-entrada.interface";
import {TipoCampoEnum} from "../constants/tipo-campo.enum";
import {TipoMensajeEnum} from "../constants/tipo-mensaje.enum";

export const registroForm: CampoEntradaInterface[] = [
  {
    type: TipoCampoEnum.TEXT,
    title: 'Nombres',
    nameField: 'nombres',
    helpText: 'Ingrese sus nombres',
    screenReaderText: 'Screen Reader nombres',
    placeholder: 'Ingrese sus nombres',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      }
    ],
    deshabilitar: true
  },
  {
    type: TipoCampoEnum.TEXT,
    title: 'Cédula',
    nameField: 'cedula',
    helpText: 'Ingrese su cédula',
    screenReaderText: 'Screen Reader cédula',
    placeholder: 'Ej: 1702365445',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
      {
        tipo: TipoMensajeEnum.LONGITUD,
        textoMensaje: 'La longitud de este campo es de 10 caracteres',
        opciones: {min: 10}
      },
    ],
    deshabilitar: true
  },
  {
    type: TipoCampoEnum.TEXT,
    title: 'Teléfono convencional',
    nameField: 'teléfono convencional',
    helpText: 'Ingrese su teléfono convencional',
    screenReaderText: 'Screen Reader teléfono convencional',
    placeholder: 'Ingrese su teléfono convencional',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
      {
        tipo: TipoMensajeEnum.LONGITUD,
        textoMensaje: 'La longitud de este campo es de 7 o 9 caracteres',
        opciones: {min: 7, max: 9}
      }
    ],
    deshabilitar: false
  },
  {
    type: TipoCampoEnum.TEXT,
    title: 'Teléfono celular',
    nameField: 'teléfono celular',
    helpText: 'Ingrese su teléfono celular',
    screenReaderText: 'Screen Reader teléfono celular',
    placeholder: 'Ingrese su teléfono celular',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
      {
        tipo: TipoMensajeEnum.LONGITUD,
        textoMensaje: 'La longitud de este campo es de 10 caracteres',
        opciones: {min: 10, max: 10}
      }
    ],
    deshabilitar: false
  },
  {
    type: TipoCampoEnum.EMAIL,
    title: 'Correo electrónico',
    nameField: 'correo electrónico',
    helpText: 'Ingrese su correo electrónico',
    screenReaderText: 'Screen Reader correo electrónico',
    placeholder: 'Ingrese su correo electrónico',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      }
    ],
    deshabilitar: false
  },
  {
    type: TipoCampoEnum.PASSWORD,
    title: 'Contraseña',
    nameField: 'contraseña',
    helpText: 'Ingrese una contraseña',
    screenReaderText: 'Screen Reader contraseña',
    placeholder: 'Ingrese una contraseña',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
      {
        tipo: TipoMensajeEnum.LONGITUD,
        textoMensaje: 'La longitud de este campo es entre 5 y 8 caracteres',
        opciones: {min: 5, max: 8}
      }
    ],
    deshabilitar: false
  },
  {
    type: TipoCampoEnum.PASSWORD,
    title: 'Confirmación de contraseña',
    nameField: 'confirmación de contraseña',
    helpText: 'Ingrese nuevamente su contraseña',
    screenReaderText: 'Screen Reader confirmación de contraseña',
    placeholder: 'Ingrese nuevamente su contraseña',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
      {
        tipo: TipoMensajeEnum.LONGITUD,
        textoMensaje: 'La longitud de este campo es entre 5 y 8 caracteres',
        opciones: {min: 5, max: 8}
      }
    ],
    deshabilitar: false
  },
]
