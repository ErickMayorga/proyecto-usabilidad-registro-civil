import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class TraduccionService {

  langs:string[] = [
    'es', // Español
    'quz-EC', // Quichua Ecuador
    'sh-EC', // Shuar Ecuador
  ]

  constructor(public translate: TranslateService) {
    translate.addLangs(this.langs);
    translate.setDefaultLang('es');

    const idioma = localStorage.getItem('idioma')
    translate.use(idioma ? idioma : 'es');
  }

  establecerLenguaje(codigoLenguaje: string){
    this.translate.use(codigoLenguaje);
  }

  obtenerLenguaje(){
    return this.translate.currentLang
  }
}
