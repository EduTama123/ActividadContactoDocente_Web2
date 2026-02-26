import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

//componente reutilizable en todo el proyecto
@Injectable({
  providedIn: 'root',
})
export class UsuarioServicios {

  private http = inject(HttpClient);

  private API_URL = 'http://localhost:8080/usuarios'

  //Metodo get para leer los datos de la api
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API_URL)
  }

  //Metodo post
  postUsuario(usuario: Usuario): Observable<Usuario> {
    //Obserbable: son una clase que espera a que se establesca la conexion con la base de datos externa
    return this.http.post<Usuario>(`${this.API_URL}/registrarUsuario`, usuario);
  }

  //Metodo buscarPorId
  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API_URL}/${id}`)
  }

  //Metodo put
  putUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.API_URL}/${id}`, usuario)
  }

  //Metodo delete
  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`)
  }

}
