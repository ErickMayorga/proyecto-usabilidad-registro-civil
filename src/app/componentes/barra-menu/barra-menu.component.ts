import {Component, Input, OnInit} from '@angular/core';
import {TraduccionService} from "../../servicios/traduccion/traduccion.service";

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.scss']
})
export class BarraMenuComponent implements OnInit {

  @Input() nombreUsuario!: string

  constructor(public translateService: TraduccionService) { }

  ngOnInit(): void {
  }

  cambiarIdioma(idioma: any){
    const idiomaString = idioma.value
    this.translateService.establecerLenguaje(idiomaString)
  }

}
