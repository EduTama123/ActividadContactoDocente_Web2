import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  //Los datos vacios que llamaremos en cada uso del componente
  @Input () titulo!: string;
  @Input () negrita!: string;
  @Input () subtitulo!: string;
  @Input () descripcion!: string;
  @Input () imagen!: string;

}
