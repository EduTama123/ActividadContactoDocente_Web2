import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pacientes',
  imports: [CommonModule, FormsModule],
  templateUrl: './pacientes.html',
  styleUrl: './pacientes.css',
})
export class Pacientes {
  nombreFiltro: string='';

  pacientes=[
    {nombre: 'Ramón', especie: 'Perro', urgencia:'alta', recuperacion: 10},
    {nombre: 'Lucky', especie: 'Gato', urgencia:'media', recuperacion: 40},
    {nombre: 'Valentina', especie: 'Conejo', urgencia:'baja', recuperacion: 85}
  ];

}
