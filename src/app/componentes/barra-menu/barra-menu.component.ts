import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.scss']
})
export class BarraMenuComponent implements OnInit {

  @Input() nombreUsuario!: string

  constructor() { }

  ngOnInit(): void {
  }

}
