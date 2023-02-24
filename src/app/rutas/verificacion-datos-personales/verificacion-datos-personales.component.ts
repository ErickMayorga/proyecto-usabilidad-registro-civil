import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-verificacion-datos-personales',
  templateUrl: './verificacion-datos-personales.component.html',
  styleUrls: ['./verificacion-datos-personales.component.scss']
})
export class VerificacionDatosPersonalesComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  constructor() { }

  ngOnInit(): void {
  }

}
