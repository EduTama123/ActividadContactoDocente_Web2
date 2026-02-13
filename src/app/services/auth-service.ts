import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuario: User | null = null;

  private auth = getAuth();

  //Metodo para iniciar sesion
  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then(respuesta => this.usuario = respuesta.user)
      .catch(err => console.error('No puede iniciar sesión', err.message))
  }

  //Metodo para cerrar sesion
  logout() {
    signOut(this.auth);
    this.usuario = null;
  }
}
