import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CampoEntradaInterface} from "../../servicios/interfaces/campo-entrada.interface";

@Component({
  selector: 'app-campo-entrada',
  templateUrl: './campo-entrada.component.html',
  styleUrls: ['./campo-entrada.component.scss']
})
export class CampoEntradaComponent implements OnInit {

  @Input() campoOpciones!: CampoEntradaInterface

  constructor() { }

  ngOnInit(): void {
  }

}
