import { CanActivateFn } from '@angular/router';

export const canloadGuard: CanActivateFn = (route, state) => {
  return true;
};
