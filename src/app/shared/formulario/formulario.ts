import { Component, inject, OnInit, signal } from '@angular/core';
import { UsuarioServicios } from '../../services/usuario-servicios';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { Salir } from '../../guards/auth-deactivate-guard';



@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario implements OnInit, Salir {

  private servicioUsuario = inject(UsuarioServicios);

  public servicioAuth = inject(AuthService);

  private router = inject(Router);

  //metodo para renderizar el html
  listaUsuarios = signal<Usuario[]>([]);

  //variable
  editando = false;

  //objeto usuario para guardar
  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: '',
    password: '',
    rol: 'EMPLEADO',
  };

  //siempre se va a cargar la lista
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
    const accion = this.editando ? 'Actualizar' : 'Registrar';
    if (confirm(`Estas seguro de que deseas ${accion} a este usuario`)) {
      if (this.editando && this.nuevoUsuario.id) {
        this.servicioUsuario.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario).subscribe(() => {
          this.obtenerUsuarios();
          this.resetear();
        });
      } else {
        this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(() => {
          this.obtenerUsuarios();
          this.resetear();
        })
      }
    }
  }

  //Metodo eliminar
  eliminarUsuario(id: string) {
    if (confirm('¿Desea eliminar el registro?')) {
      this.servicioUsuario.deleteUsuario(id).subscribe(() => {
        this.listaUsuarios.set(this.listaUsuarios().filter(u => u.id !== id));
      });
    }

  }

  //Metodo para seleccionar para actualizar
  seleccionarParaEditar(user: Usuario) {
    this.editando = true;
    this.nuevoUsuario = { ...user };
  }

  resetear() {
    this.editando = false;
    //limpiar form
    this.nuevoUsuario = { name: '', email: '', phone: '', password: '', rol: 'EMPLEADO' };
  }

  /*guardarUsuario() {
      //subscribe: para que se ejecute el metodo que es de tipo observable
      this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(usuarioId => {
        // ... Spread Operator: combina el nuevo usuario con la listaUsuarios
        this.listaUsuarios.set([usuarioId, ...this.listaUsuarios()]);
        //limpiar form
        this.nuevoUsuario = { name: '', email: '', phone: '' };
      })
    }*/

  //Funcion para el candeactivate
  finalizarYSalir() {
    this.obtenerUsuarios();
    this.resetear();
    this.router.navigate(['/']);
  }

  //funcion para evitar salir sin guardar datos
  permitirSalir(): boolean {
    const DatosIntroducidos =
      (this.nuevoUsuario.name?.trim() ?? '') !== '' ||
      (this.nuevoUsuario.email?.trim() ?? '') !== '' ||
      (this.nuevoUsuario.phone?.trim() ?? '') !== '';

    if (this.editando || DatosIntroducidos) {
      return confirm('Tienes cambios sin guardar en el formulario. ¿Deseas salir de todos modos?');
    }
    return true;
  }

}
