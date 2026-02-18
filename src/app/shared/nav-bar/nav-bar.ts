import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  
  private servicioAuth = inject(AuthService);

  private router = inject(Router);

  //Inyectar el servicio auth para iniciar sesion
  cerrarSesion(){
    this.servicioAuth.logout();
    alert('Sesion cerrada')
    this.router.navigate([''])
  }
}
