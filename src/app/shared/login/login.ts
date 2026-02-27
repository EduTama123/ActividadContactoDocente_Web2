import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email: string = '';
  password: string = '';

  private servicioAuth = inject(AuthService);
  private router = inject(Router);

  iniciarSesion() {
    this.servicioAuth.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response); // Para debugging
        alert('Registro exitoso');

        // Verificar qué rol tiene el usuario
        const rol = response.rol;
        console.log('Rol del usuario:', rol);

        // Redirigir según el rol
        if (rol === 'ROLE_ADMIN') {
          this.router.navigate(['/usuarios']);
        } else {
          this.router.navigate(['/']);
        }
      },
      error: (error) => {
        console.error('Error en login:', error);
        alert('Usuario o contraseña incorrectos');
      }
    });
  }

  cerrarSesion() {
    this.servicioAuth.logout();
    alert('Sesión cerrada');
    this.router.navigate(['']);
  }
}