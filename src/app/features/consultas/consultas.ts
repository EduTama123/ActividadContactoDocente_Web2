import { Component } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { DetalleMascota } from "../../shared/detalle-mascota/detalle-mascota";
import { Precios } from "../../shared/precios/precios";
import { Hero } from '../../shared/hero/hero';
import { Testimonios } from '../../shared/testimonios/testimonios';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-consultas',
  imports: [DetalleMascota, Precios, Testimonios, RouterLink],
  templateUrl: './consultas.html',
  styleUrl: './consultas.css',
})
export class Consultas {

  mascotas = [
    { id: 1, nombre: "Ramón", especie: "Perro", historial: "Vacunas al día" },
    { id: 2, nombre: "Lucky", especie: "Gato", historial: "Requiere desparacitación" },
    { id: 3, nombre: "Valentina", especie: "Coneja", historial: "Requiere rehabilitación" }
  ];

  mascotaSeleccionada: Mascota | null = null;

  mensajeActivo: string = '';

  verDetalles(mascota: Mascota) {
    this.mascotaSeleccionada = mascota;
  }

  //Recibe un mensaje del componente hijo
  //Gestiona el evento enviado del componente hijo
  procesarAviso(mensaje: string) {
    this.mensajeActivo = mensaje;
  }
}
