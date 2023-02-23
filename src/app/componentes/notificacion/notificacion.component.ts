import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NotificacionInterface} from "../../interfaces/notificacion.interface";
import {TipoNotificacionEnum} from "../../constants/tipo-notificacion.enum";
import {TipoBotonEnum} from "../../constants/tipo-boton.enum";

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss']
})
export class NotificacionComponent implements OnInit {

  notificacionOptions!: NotificacionInterface
  tiposNotificacion = TipoNotificacionEnum
  tiposBotones = TipoBotonEnum

  constructor(@Inject(MAT_DIALOG_DATA) public datos: any,
              public dialogRef: MatDialogRef<NotificacionComponent>,) {
    this.notificacionOptions = this.datos.opciones
  }

  ngOnInit(): void {
  }

  cerrar(accion: TipoBotonEnum){
    this.dialogRef.close({accion: accion})
  }

}
