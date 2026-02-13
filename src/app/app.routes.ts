import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Acerca } from './features/acerca/acerca';
import { Consultas } from './features/consultas/consultas';
import { Mascotas } from './shared/mascotas/mascotas';
import { Usuarios } from './features/usuarios/usuarios';
import { FormularioCuenta } from './shared/formulario-cuenta/formulario-cuenta';
import { Login } from './shared/login/login';

export const routes: Routes = [
    //1. Ruta inicial
    { path: '', component: Home },
    //2. Rutas de navegacion
    {path: 'acerca', component: Acerca},
    {path: 'consultas', component: Consultas},
    {path: 'mascotas', component: Mascotas},
    {path: 'usuarios', component: Usuarios},
    {path: 'formulario', component: FormularioCuenta},
    {path: 'login', component: Login},
    //FINAL
    //3. Redireccion si el usuario escribe una url que no existe
    //{path: '**', component: Pagina404}

];
