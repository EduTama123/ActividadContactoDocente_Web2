import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Acerca } from './features/acerca/acerca';
import { Consultas } from './features/consultas/consultas';

export const routes: Routes = [
    //1. Ruta inicial
    { path: 'home', component: Home },
    //2. Rutas de navegacion
    {path: 'acerca', component: Acerca},
    {path: 'consultas', component: Consultas}

    //FINAL
    //3. Redirecci+on si el usuario escribe una url que no existe
    //{path: '**', component: Pagina404}

];
