import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Acerca } from './features/acerca/acerca';
import { Consultas } from './features/consultas/consultas';
import { Mascotas } from './shared/mascotas/mascotas';
import { Usuarios } from './features/usuarios/usuarios';
import { FormularioCuenta } from './shared/formulario-cuenta/formulario-cuenta';
import { Login } from './shared/login/login';

export const routes: Routes = [
    // Ruta inicial
    { path: '', component: Home }, // Sin guard por ahora
    
    // Rutas públicas - sin guards para probar
    { path: 'acerca', component: Acerca },
    { path: 'formulario', component: FormularioCuenta },
    { path: 'login', component: Login },
    
    // Rutas protegidas - temporalmente sin guards
    { path: 'mascotas', component: Mascotas },
    { path: 'usuarios', component: Usuarios },
    { path: 'consultas', component: Consultas },
    
    // Ruta por defecto
    { path: '**', redirectTo: '' }
];