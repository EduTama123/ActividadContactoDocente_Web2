import { CanActivateFn } from '@angular/router';

//route: ruta a que quiere ingresar el usuario
//state: le da la ruta completa a donde quiere ir el usuario
export const authGuard: CanActivateFn = (route, state) => {
  return false;
};
