import { Component, inject, signal } from '@angular/core';
import { MascotaService } from '../../services/mascota-service';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-mascotas',
  imports: [],
  templateUrl: './mascotas.html',
  styleUrl: './mascotas.css',
})
export class Mascotas {

  private mascotaServicio = inject(MascotaService);

  //signal:variable reactiva de angular (actualiza los cambios)
  mascotas = signal<Pet[]>([])

  //metodo para que este presente los datos desde el inicio
  ngOnInit(): void {
    this.mascotaServicio.getMascotas().subscribe(datos => {
      this.mascotas.set(datos.data)
    });
  }

  alerta(){
    alert("Gracias por escogerme")
  }

}