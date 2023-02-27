import {CampoEntradaInterface} from "../../interfaces/campo-entrada.interface";
import {TipoCampoEnum} from "../../constants/tipo-campo.enum";
import {TipoMensajeEnum} from "../../constants/tipo-mensaje.enum";

export const provincias = [
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
export const cantones = [
  {clave: "1", valor: "Quito"},
  {clave: "2", valor: "Cayambe"},
  {clave: "3", valor: "Mejía"},
  {clave: "4", valor: "Pedro Moncayo"},
  {clave: "5", valor: "Pedro Vicente Maldonado"},
  {clave: "6", valor: "Puerto Quito"},
  {clave: "7", valor: "Rumiñahui"},
  {clave: "8", valor: "San Miguel de los Bancos"},
]
export const parroquias = [
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
    opciones: cantones
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
    opciones: parroquias
  },
]

