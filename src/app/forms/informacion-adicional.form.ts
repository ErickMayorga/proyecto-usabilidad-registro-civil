import {CampoEntradaInterface} from "../interfaces/campo-entrada.interface";
import {TipoCampoEnum} from "../constants/tipo-campo.enum";
import {TipoMensajeEnum} from "../constants/tipo-mensaje.enum";

export const informacionAdicionalForm: CampoEntradaInterface[] = [
  {
    type: TipoCampoEnum.TEXT,
    title: 'Padre: ',
    nameField: 'padre',
    helpText: 'Ingrese el nombre completo de su padre',
    screenReaderText: 'Nombre completo de su padre',
    placeholder: 'Ej: Milton Stalin Rosero Cadena',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
      {
        tipo: TipoMensajeEnum.LONGITUD,
        textoMensaje: 'La longitud de este campo es entre 5 y 8 caracteres',
        opciones: {min: 15, max: 30}
      },
    ],
    deshabilitar: true
  },

  {
    type: TipoCampoEnum.TEXT,
    title: 'Madre: ',
    nameField: 'madre',
    helpText: 'Ingrese el nombre completo de su madre',
    screenReaderText: 'Nombre completo de su madre',
    placeholder: 'Ej: Jenny Tatiana Peñaherrera Tumipamba',
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
    type: TipoCampoEnum.TEXT,
    title: 'Conyugue: ',
    nameField: 'conyugue',
    helpText: 'Ingrese el nombre completo de su cónyuge (si corresponde)',
    screenReaderText: 'Nombre completo de su cónyuge',
    placeholder: 'Ej: Jenny Tatiana Peñaherrera Tumipamba',
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
    type: TipoCampoEnum.TEXT,
    title: 'Nro.Domicilio: ',
    nameField: 'domicilio',
    helpText: 'Ingrese su número de domicilio (ej. OE8-177)',
    screenReaderText: 'Número de domicilio (ej. OE8-177)',
    placeholder: 'Ej: OE8-177',
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
    deshabilitar: true
  },

  {
    type: TipoCampoEnum.SELECT,
    title: 'Provincia:',
    nameField: 'provinciaAdicional',
    helpText: 'Seleccione una provincia',
    screenReaderText: 'Seleccione una provincia',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
    ],
    deshabilitar: true,
    opciones: [
      {clave: "1", valor: "Azuay"},
      {clave: "2", valor: "Bolívar"},
      {clave: "3", valor: "Cañar"},
      {clave: "4", valor: "Carchi"},
      {clave: "5", valor: "Chimborazo"},
      {clave: "6", valor: "Cotopaxi"},
      {clave: "7", valor: "El Oro"},
      {clave: "8", valor: "Esmeraldas"},
      {clave: "9", valor: "Galápagos"},
      {clave: "10", valor: "Guayas"},
      {clave: "11", valor: "Imbabura"},
      {clave: "12", valor: "Loja"},
      {clave: "13", valor: "Los Ríos"},
      {clave: "14", valor: "Manabí"},
      {clave: "15", valor: "Morona-Santiago"},
      {clave: "16", valor: "Napo"},
      {clave: "17", valor: "Orellana"},
      {clave: "18", valor: "Pastaza"},
      {clave: "19", valor: "Pichincha"},
      {clave: "20", valor: "Santa Elena"},
      {clave: "21", valor: "Santdo Domingo de los Tsáchilas"},
      {clave: "22", valor: "Sucumbíos"},
      {clave: "23", valor: "Tungurahua"},
      {clave: "24", valor: "Zamora-Chinchipe"}
    ]
  },

  {
    type: TipoCampoEnum.SELECT,
    title: 'Canton:',
    nameField: 'cantonAdicional',
    helpText: 'Seleccione un canton',
    screenReaderText: 'Seleccione un canton',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
    ],
    deshabilitar: true,
    opciones: [
      {clave: "1", valor: "Quito"},
      {clave: "2", valor: "Cayambe"},
      {clave: "3", valor: "Mejía"},
      {clave: "4", valor: "Pedro Moncayo"},
      {clave: "5", valor: "Pedro Vicente Maldonado"},
      {clave: "6", valor: "Puerto Quito"},
      {clave: "7", valor: "Rumiñahui"},
      {clave: "8", valor: "San Miguel de los Bancos"},
    ]
  },

  {
    type: TipoCampoEnum.SELECT,
    title: 'Parroquia:',
    nameField: 'parroquiaAdicional',
    helpText: 'Seleccione una parroquia',
    screenReaderText: 'Seleccione una parroquia',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
    ],
    deshabilitar: true,
    opciones: [
      {clave: "1", valor: "Belisario Quevedo"},
      {clave: "2", valor: "Carcelén"},
      {clave: "3", valor: "Centro Histórico"},
      {clave: "4", valor: "Cochapamba"},
      {clave: "5", valor: "Comité del pueblo"},
      {clave: "6", valor: "Cotocollao"},
      {clave: "7", valor: "Chilibulo"},
      {clave: "8", valor: "Chillogallo"},
      {clave: "9", valor: "Chimbacalle"},
      {clave: "10", valor: "El Condado"},
      {clave: "11", valor: "Guamaní"},
      {clave: "12", valor: "Iñaquito"},
      {clave: "13", valor: "Jipijapa"},
      {clave: "14", valor: "Kennedy"},
      {clave: "15", valor: "La Argelia"},
      {clave: "16", valor: "La Concepcion"},
      {clave: "17", valor: "La Ecuatoriana"},
      {clave: "18", valor: "La Ferroviaria"},
      {clave: "19", valor: "La Libertad"},
      {clave: "20", valor: "La Magdalena"},
      {clave: "21", valor: "La Mena"},
      {clave: "22", valor: "Mariscal Sucre"},
      {clave: "23", valor: "Ponceano"},
      {clave: "24", valor: "Puengasi"}
    ]
  },

  {
    type: TipoCampoEnum.SELECT,
    title: 'Instruccion:',
    nameField: 'instruccion',
    helpText: 'Seleccione su instruccion',
    screenReaderText: 'Seleccione su instruccion',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
    ],
    deshabilitar: true,
    opciones: [
      {clave: "1", valor: "Primaria"},
      {clave: "2", valor: "Secundaria"},
      {clave: "3", valor: "Superior"},
    ]
  },

  {
    type: TipoCampoEnum.TEXT,
    title: 'Profesion: ',
    nameField: 'profesion',
    helpText: 'Ingrese el nombre de su profesion',
    screenReaderText: 'Profesion (ej. Ingeniería de Software)',
    placeholder: 'Ej: Ingeniería de Software',
    mensajes: [
      {
        tipo: TipoMensajeEnum.REQUERIDO,
        textoMensaje: 'Este campo es requerido',
      },
      {
        tipo: TipoMensajeEnum.LONGITUD,
        textoMensaje: 'La longitud de este campo es entre 15 y 25 caracteres',
        opciones: {min: 15, max: 25}
      },
    ],
    deshabilitar: true
  },
]
