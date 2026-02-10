import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/pet';
import { Usuario } from '../models/usuario';

//componente reutilizable en todo el proyecto
@Injectable({
  providedIn: 'root',
})
export class UsuarioServicios {

  private http = inject(HttpClient);

  private API_URL = 'https://jsonplaceholder.typicode.com/users'

  //Metodo para leer los datos de la api
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API_URL)
  }

  //Metodo post
  postUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.API_URL, usuario);
  }
}
