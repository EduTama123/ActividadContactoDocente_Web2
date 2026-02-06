import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonios',
  imports: [],
  templateUrl: './testimonios.html',
  styleUrl: './testimonios.css',
})
export class Testimonios {

  //Los datos vacios que llamaremos en cada uso del componente
  @Input () titulo!: string;
  @Input () subtitulo!: string;
  @Input () comentario1!: string;
  @Input () perfil1!: string;
  @Input () duenio1!: string;
  @Input () mascota1!: string;
  @Input () comentario2!: string;
  @Input () perfil2!: string;
  @Input () duenio2!: string;
  @Input () mascota2!: string;
}
