import { Component } from '@angular/core';
import { Blog } from '../../shared/blog/blog';
import { Hero } from '../../shared/hero/hero';
import { Testimonios } from "../../shared/testimonios/testimonios";


@Component({
  selector: 'app-acerca',
  imports: [Blog, Hero, Testimonios],
  templateUrl: './acerca.html',
  styleUrl: './acerca.css',
})
export class Acerca {

}
