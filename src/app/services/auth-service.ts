import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient);
  private API_URL = 'http://localhost:8080/login';

  // Signals para el estado de la sesión
  sesionIniciada = signal<boolean>(localStorage.getItem('sesion') === 'true');
  rolActual = signal<string | null>(localStorage.getItem('rol'));
  tokenActual = signal<string | null>(localStorage.getItem('token'));

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.API_URL, { email, password }).pipe(
      tap(res => {
        if (res && res.token) {
          // Guardar en localStorage
          localStorage.setItem('token', res.token);
          localStorage.setItem('rol', res.rol);
          localStorage.setItem('sesion', 'true');
          localStorage.setItem('email', res.email);

          // Actualizar signals
          this.tokenActual.set(res.token);
          this.rolActual.set(res.rol);
          this.sesionIniciada.set(true);

          console.log('Sesión iniciada correctamente:', {
            token: res.token,
            rol: res.rol,
            email: res.email
          });
        }
      })
    );
  }

  logout() {
    // Limpiar localStorage
    localStorage.removeItem('sesion');
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('email');

    // Actualizar signals
    this.sesionIniciada.set(false);
    this.rolActual.set(null);
    this.tokenActual.set(null);

    console.log('Sesión cerrada correctamente');
  }

  // Método útil para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.sesionIniciada() && !!localStorage.getItem('token');
  }

  // Método para obtener el token actual
  getToken(): string | null {
    return this.tokenActual() || localStorage.getItem('token');
  }

  // Método para verificar si es admin
  isAdmin(): boolean {
    return this.rolActual() === 'ROLE_ADMIN' || localStorage.getItem('rol') === 'ROLE_ADMIN';
  }
}