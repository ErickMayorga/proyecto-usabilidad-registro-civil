import {CampoEntradaInterface} from "../interfaces/campo-entrada.interface";
import {TipoCampoEnum} from "../constants/tipo-campo.enum";
import {TipoMensajeEnum} from "../constants/tipo-mensaje.enum";

export const informacionBasicaForm: CampoEntradaInterface[] = [
  {
    type: TipoCampoEnum.TEXT,
    title: 'Nombre: ',
    nameField: 'nombre',
    helpText: 'Ingrese su nombre completo',
    screenReaderText: 'Nombre completo',
    placeholder: 'Ej: Ariel Thomás Rosero Peñaherrera',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
      {
        tipo: TipoMensajeEnum.LONGITUD,
        textoMensaje: 'La longitud de este campo es entre 15 y 30 caracteres',
        opciones: {min: 15, max: 30}
      },
    ],
    deshabilitar: true
  },
  {
    type: TipoCampoEnum.SELECT,
    title: 'Sexo:',
    nameField: 'sexo',
    helpText: 'Seleccione su sexo',
    screenReaderText: 'Sexo',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
    ],
    deshabilitar: true,
    opciones: [
      {clave: "1", valor: "Hombre"},
      {clave: "2", valor: "Mujer"},
    ]
  },

  {
    type: TipoCampoEnum.DATE,
    title: 'Fecha de Nacimiento:',
    nameField: 'fecha',
    helpText: 'Ingrese una fecha (dd/mm/aaaa)',
    screenReaderText: 'Fecha de nacimiento',
    placeholder: '27/11/1999',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
    ],
    deshabilitar: true
  },

  {
    type: TipoCampoEnum.SELECT,
    title: 'Estado Civil:',
    nameField: 'estadoCivil',
    helpText: 'Seleccione su estado civil',
    screenReaderText: 'Estado civil',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
    ],
    deshabilitar: true,
    opciones: [
      {clave: "1", valor: "Soltero"},
      {clave: "2", valor: "Casado"},
      {clave: "3", valor: "Divorsiado"},
      {clave: "4", valor: "Viudo"},
    ]
  },
]
