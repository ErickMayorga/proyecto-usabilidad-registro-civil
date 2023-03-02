import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CampoEntradaInterface} from "../../interfaces/campo-entrada.interface";
import {CampoEntradaService} from "../../servicios/campo-entrada/campo-entrada.service";

@Component({
  selector: 'app-campo-entrada',
  templateUrl: './campo-entrada.component.html',
  styleUrls: ['./campo-entrada.component.scss']
})
export class CampoEntradaComponent implements OnInit {

  @Input() formGroup!: FormGroup
  @Input() campoOpciones!: CampoEntradaInterface
  @Input() color: string = ''

  constructor(private readonly campoEntradaService: CampoEntradaService) {
  }

  ngOnInit(): void {
    if(this.campoOpciones.deshabilitar){
      this.formGroup.get(this.campoOpciones.nameField)?.disable()
    }
  }

  obtenerMensajeAyuda(campo: CampoEntradaInterface, formGroup: FormGroup){
    return this.campoEntradaService.obtenerMensajeValidacion(campo, formGroup)
  }
}
