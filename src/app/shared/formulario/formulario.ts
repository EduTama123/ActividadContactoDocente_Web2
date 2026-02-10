import { Component, inject, signal } from '@angular/core';
import { UsuarioServicios } from '../../services/usuario-servicios';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  private servicioUsuario = inject(UsuarioServicios);

  //metodo para renderizar el html
  listaUsuarios = signal<Usuario[]>([]);

  //objeto usuario
  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: ''
  };

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  //Metodo obtenerUsuarios
  obtenerUsuarios() {
    this.servicioUsuario.getUsuarios().subscribe(Usuarios => {
      this.listaUsuarios.set(Usuarios);
    })
  }

  //Metodo guardarUsuarios
  guardarUsuario() {
    this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(usuarioId => {
      // ... Spread Operator: combina el nuevo usuario con la listaUsuarios
      this.listaUsuarios.set([usuarioId, ...this.listaUsuarios()]);
      //limpiar form
      this.nuevoUsuario = { name: '', email: '', phone: '' };
    })
  }
}
