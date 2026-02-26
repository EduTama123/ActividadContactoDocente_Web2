import { inject, Injectable, signal } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { UsuarioServicios } from './usuario-servicios';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private servicioUsuario = inject(UsuarioServicios);
  //Inyeccion del hhtp client
  private http = inject(HttpClient)

  private API_URL = 'http://localhost:8080/login'


  //localStorage
  sesionIniciada = signal<boolean>(localStorage.getItem('sesion') === 'true');

  //Accedemos al rol del usuario
  rolActual = signal<string | null>(localStorage.getItem('rol'));

  login(email: string, passw: string): Observable<boolean> {
    return this.http.post<Usuario | null>(this.API_URL, {email, password:passw}).pipe(
      map(usuarioCoincide => {
        if (usuarioCoincide) {
          localStorage.setItem('sesion', 'true');
          //guardar estos datos convirtiendo el objeto json a texto
          localStorage.setItem('user', JSON.stringify(usuarioCoincide));
          //guardar el rol
          localStorage.setItem('rol', usuarioCoincide.rol);
          this.rolActual.set(usuarioCoincide.rol);

          this.sesionIniciada.set(true);
          return true;
        }
        return false;
      })
    );
  }

  logout() {
    localStorage.removeItem('sesion');
    localStorage.removeItem('user');
    localStorage.removeItem('rol');
    this.sesionIniciada.set(false);
    this.rolActual.set(null);
  }

}
