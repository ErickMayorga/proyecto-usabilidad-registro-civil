import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {BotonInterface} from "../../interfaces/boton.interface";
import {TipoBotonEnum} from "../../constants/tipo-boton.enum";
import {NotificacionInterface} from "../../interfaces/notificacion.interface";
import {TipoNotificacionEnum} from "../../constants/tipo-notificacion.enum";
import {NotificacionComponent} from "../../componentes/notificacion/notificacion.component";
import {CampoEntradaService} from "../../servicios/campo-entrada/campo-entrada.service";
import {MatDialog} from "@angular/material/dialog";
import {FormGroup} from "@angular/forms";
import {CampoEntradaInterface} from "../../interfaces/campo-entrada.interface";
import {TipoCampoEnum} from "../../constants/tipo-campo.enum";
import {TipoMensajeEnum} from "../../constants/tipo-mensaje.enum";
import {camposLugar} from "./lugar.const";

@Component({
  selector: 'app-verificacion-datos-personales',
  templateUrl: './verificacion-datos-personales.component.html',
  styleUrls: ['./verificacion-datos-personales.component.scss']
})
export class VerificacionDatosPersonalesComponent implements OnInit {

  formGroup!: FormGroup
  tipoNotificacion = TipoNotificacionEnum

  //CAMPOS INFORMACIoN BaSICA
  camposInfBasica: CampoEntradaInterface[] = [
    {
      type: TipoCampoEnum.TEXT,
      title: 'Nombre: ',
      nameField: 'campo',
      helpText: 'Ingrese solo letras (Nombre completo)',
      screenReaderText: 'Ingrese su nombre completo',
      placeholder: 'Ariel Thomás Rosero Peñaherrera',
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
      deshabilitar: false
    },

    {
      type: TipoCampoEnum.SELECT,
      title: 'Sexo:',
      nameField: 'sexo',
      helpText: 'Seleccione su sexo',
      screenReaderText: 'Seleccione el sexo',
      placeholder: 'Hombre',
      mensajes: [
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'Este campo es requerido',
        },
      ],
      deshabilitar: false,
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
      screenReaderText: 'Ingrese una fecha en formato: dd/mm/aaaa',
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
      type: TipoCampoEnum.SELECT,
      title: 'Estado Civil:',
      nameField: 'estadoCivil',
      helpText: 'Seleccione su estado civil',
      screenReaderText: 'Seleccione su estado civil',
      placeholder: 'Soltero',
      mensajes: [
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'Este campo es requerido',
        },
      ],
      deshabilitar: false,
      opciones: [
        {clave: "1", valor: "Soltero"},
        {clave: "2", valor: "Casado"},
        {clave: "3", valor: "Divorsiado"},
        {clave: "4", valor: "Viudo"},
      ]
    },
  ]

  //CAMPOS INFORMACIÓN ADICIONAL
  camposInfAdicional: CampoEntradaInterface[] = [
    {
      type: TipoCampoEnum.TEXT,
      title: 'Padre: ',
      nameField: 'campo',
      helpText: 'Ingrese solo letras (Nombre completo)',
      screenReaderText: 'Ingrese el nombre completo de su padre',
      placeholder: 'Milton Stalin Rosero Cadena',
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
      nameField: 'campo',
      helpText: 'Ingrese solo letras (Nombre completo)',
      screenReaderText: 'Ingrese el nombre completo de su madre',
      placeholder: 'Jenny Tatiana Peñaherrera Tumipamba',
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
      deshabilitar: false
    },

    {
      type: TipoCampoEnum.TEXT,
      title: 'Conyugue: ',
      nameField: 'campo',
      helpText: 'Ingrese solo letras (Nombre completo)',
      screenReaderText: 'Ingrese el nombre completo de su conyuge (si tuviera)',
      placeholder: '...',
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
      deshabilitar: false
    },

    {
      type: TipoCampoEnum.TEXT,
      title: 'Nro.Domicilio: ',
      nameField: 'campo',
      helpText: 'Ingrese su número de domicilio (ej. OE8-177)',
      screenReaderText: 'Ingrese su número de domicilio (ej. OE8-177)',
      placeholder: 'OE8-177',
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
      type: TipoCampoEnum.SELECT,
      title: 'Provincia:',
      nameField: 'provincia',
      helpText: 'Seleccione una provincia',
      screenReaderText: 'Seleccione una provincia',
      placeholder: 'Pichincha',
      mensajes: [
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'Este campo es requerido',
        },
      ],
      deshabilitar: false,
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
      nameField: 'canton',
      helpText: 'Seleccione un canton',
      screenReaderText: 'Seleccione un canton',
      placeholder: 'Quito',
      mensajes: [
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'Este campo es requerido',
        },
      ],
      deshabilitar: false,
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
      nameField: 'parroquia',
      helpText: 'Seleccione una parroquia',
      screenReaderText: 'Seleccione una parroquia',
      placeholder: 'Belisario Quevedo',
      mensajes: [
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'Este campo es requerido',
        },
      ],
      deshabilitar: false,
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
      placeholder: 'Secundaria',
      mensajes: [
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'Este campo es requerido',
        },
      ],
      deshabilitar: false,
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
      helpText: 'Ingrese su profesion (ej. Ingeniería de Software)',
      screenReaderText: 'Ingrese su profesion (ej. Ingeniería de Software)',
      placeholder: 'Ingeniería de Software',
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

  //CAMPOS INFORMACIÓN DE NACIMIENTO
  camposInfNacimiento: CampoEntradaInterface[] = [
    {
      type: TipoCampoEnum.TEXT,
      title: 'Tomo: ',
      nameField: 'tomo',
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
      nameField: 'clase',
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
      nameField: 'pagina',
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
      nameField: 'acta',
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

  camposInfMatrimonio: CampoEntradaInterface[] = [
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

  campoCheckNotificacion: CampoEntradaInterface[] = [
    {
      type: TipoCampoEnum.CHECKBOX,
      title: 'Estoy de acuerdo con los términos y condiciones establecidas',
      nameField: 'checkField',
      helpText: '',
      screenReaderText: 'Checkbox para aceptar los términos y condiciones establecidas',
      mensajes: [
        {
          tipo: TipoMensajeEnum.REQUERIDO,
          textoMensaje: 'Para continuar debe estar de acuerdo con los términos y condiciones establecidas',
        },
      ],
      deshabilitar: false
    },
  ]

  camposLugar = camposLugar

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  constructor(private readonly campoEntradaService: CampoEntradaService,
              public dialog: MatDialog,) {
    this.camposInfBasica = this.camposInfBasica.concat()
    this.formGroup = this.campoEntradaService.getFormGroup(this.camposInfBasica)

    this.camposInfAdicional = this.camposInfAdicional.concat()
    this.formGroup = this.campoEntradaService.getFormGroup(this.camposInfAdicional)

    this.camposInfNacimiento = this.camposInfNacimiento.concat()
    this.formGroup = this.campoEntradaService.getFormGroup(this.camposInfNacimiento)

    this.camposInfMatrimonio = this.camposInfMatrimonio.concat()
    this.formGroup = this.campoEntradaService.getFormGroup(this.camposInfMatrimonio)

    this.campoCheckNotificacion = this.campoCheckNotificacion.concat()
    this.formGroup = this.campoEntradaService.getFormGroup(this.campoCheckNotificacion)
  }

  ngOnInit(): void {
  }

  abrirConfirmacion(){
    const botones: BotonInterface[] = [
      {tipo: TipoBotonEnum.ACEPTAR, texto: 'SI, CONTINUAR', lectorTexto: 'Botón aceptar', nombreBoton: 'btnAceptar'},
      {tipo: TipoBotonEnum.CANCELAR, texto: 'VOLVER', lectorTexto: 'Botón cancelar', nombreBoton: 'btnCancelar'},
    ]
    const notificacionOpciones: NotificacionInterface = {
      tipo: TipoNotificacionEnum.CONFIRMACION,
      titulo: 'ADVERTENCIA',
      contenido: 'Las inconsistencias generadas se enviarán al servicio del Registro Civil para su corrección. ' +
                 '¿Está seguro de que la información ingresada es correcta?',
      botones: botones
    }
    this.mostrarNotificacion(notificacionOpciones)
  }

  abrirConfirmacionCerrarSesion(){
    const botones: BotonInterface[] = [
      {tipo: TipoBotonEnum.ACEPTAR, texto: 'SI, SALIR', lectorTexto: 'Botón aceptar', nombreBoton: 'btnAceptar'},
      {tipo: TipoBotonEnum.CANCELAR, texto: 'CANCELAR', lectorTexto: 'Botón cancelar', nombreBoton: 'btnCancelar'},
    ]
    const notificacionOpciones: NotificacionInterface = {
      tipo: TipoNotificacionEnum.CONFIRMACION,
      titulo: 'ADVERTENCIA',
      contenido: '¿Está seguro de que quiere salir?',
      botones: botones
    }
    this.mostrarNotificacion(notificacionOpciones)
  }

  mostrarCampoInconsistencia(campo: CampoEntradaInterface){
    if(campo.editable === undefined){
      campo.editable = true
    }else{
      campo.editable = !campo.editable
    }
  }

  mostrarNotificacion(notificacionOpciones: NotificacionInterface){
    // Apertura de notificacion
    const referenciaDialogo = this.dialog.open(
      NotificacionComponent,
      {
        disableClose: false,
        width: '60%',
        data: {
          opciones: notificacionOpciones
        }
      }
    )

    // Cerrado de notificacion
    referenciaDialogo.afterClosed().subscribe(
      (datos) => {
        if(datos!=undefined){
          const accion = datos['accion']
          console.log(accion)
        }
      }
    )
  }
}
