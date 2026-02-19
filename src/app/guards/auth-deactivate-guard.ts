import { CanDeactivateFn } from '@angular/router';

export interface Salir {
  permitirSalir:() => boolean;
}

export const authDeactivateGuard: CanDeactivateFn<Salir> = (component) => {
  
  return component.permitirSalir ? component.permitirSalir() : true;
};
