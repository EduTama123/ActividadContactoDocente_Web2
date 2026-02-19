import { inject, Injectable, signal } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { UsuarioServicios } from './usuario-servicios';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private servicioUsuario = inject(UsuarioServicios);

  

  //localStorage
  sesionIniciada = signal<boolean>(localStorage.getItem('sesion') === 'true');

  //Accedemos al rol del usuario
  rolActual = signal<string | null>(localStorage.getItem('rol'));

  login(email: string, password: string): Observable<boolean> {
    return this.servicioUsuario.getUsuarios().pipe(
      map(usuarios => {
        const usuarioCoincide = usuarios.find(u => u.email === email && u.password === password);
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
