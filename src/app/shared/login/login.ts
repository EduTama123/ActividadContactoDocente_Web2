import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email: string='';
  password: string='';

  private servicioAuth = inject(AuthService);

  //Inyectar el servicio auth para iniciar sesion
  iniciarSesion(){
    this.servicioAuth.login(this.email, this.password);
    alert('Bienvenidos al sistema');
  }

  //Inyectar el servicio auth para iniciar sesion
  cerrarSesion(){
    this.servicioAuth.logout();
  }

}
