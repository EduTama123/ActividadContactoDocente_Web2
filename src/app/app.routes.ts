import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Acerca } from './features/acerca/acerca';
import { Consultas } from './features/consultas/consultas';
import { Mascotas } from './shared/mascotas/mascotas';
import { Usuarios } from './features/usuarios/usuarios';
import { FormularioCuenta } from './shared/formulario-cuenta/formulario-cuenta';
import { Login } from './shared/login/login';
import { authGuard } from './guards/auth-guard';
import { authDeactivateGuard } from './guards/auth-deactivate-guard';
import { authChildrenGuard } from './guards/auth-children-guard';
import { adminMatchGuard, empleadoMatchGuard, publicMatchGuard } from './guards/match-guard';


export const routes: Routes = [
    //1. Ruta inicial
    { path: '', component: Home, canMatch:[publicMatchGuard] },
    //2. Rutas de navegacion
      //{path: 'acerca', component: Acerca},
    // {path: 'consultas', component: Consultas},
      //{path: 'mascotas', component: Mascotas},
    {path: 'usuarios', component: Usuarios,canMatch:[adminMatchGuard] , canActivate:[authGuard], canDeactivate: [authDeactivateGuard]},
    {path: 'formulario', component: FormularioCuenta, canMatch:[publicMatchGuard]},
    {path: 'login', component: Login, canMatch:[publicMatchGuard]},
    //FINAL
    //3. Redireccion si el usuario escribe una url que no existe
    //{path: '**', component: Pagina404}

    //Implementacion del guardar canActivateChild
    // 1. Proteger las vistas de mascotas y acerca
      {path: '', canActivateChild: [authChildrenGuard], children:[
          {path: 'mascotas', component: Mascotas, canMatch:[empleadoMatchGuard]},
          {path: 'acerca', component: Acerca, canMatch:[publicMatchGuard]}
      ]},
    //2. Proteccion de una funcion en una ruta
    {path: 'consultas', component: Consultas,canMatch:[adminMatchGuard] , canActivateChild: [authChildrenGuard], children:[
        {path: 'ver', component: Consultas}
    ]}

];
