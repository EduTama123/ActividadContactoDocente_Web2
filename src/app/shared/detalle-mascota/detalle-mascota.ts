import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mascota } from '../../models/mascota';

@Component({
  selector: 'app-detalle-mascota',
  imports: [],
  templateUrl: './detalle-mascota.html',
  styleUrl: './detalle-mascota.css',
})
//COMPONENTE HIJO
export class DetalleMascota {
  //Recibe un parametro desde el componente padre - CONSULTAS
  @Input() mascota?: Mascota;

  //Decorador ouput
  //El componente hijo DETALLE envia en este caso un evento
  @Output() notificarAccion = new EventEmitter<string>();

  //Metodo que se va activar cuando haga click en el boton del componente hijo
  avisarIngreso(): void {
    if (this.mascota) {
      this.notificarAccion.emit(
        `El paciente ${this.mascota.nombre} ha sido llamada a consulta`
      )
    }
  }

}
