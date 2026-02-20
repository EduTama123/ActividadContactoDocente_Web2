import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const authChildrenGuard: CanActivateChildFn = (route, state) => {
  
  const servicioAuth = inject(AuthService);

  const router = inject(Router);

  if (servicioAuth.sesionIniciada()) {
    return true;
  }

  return router.parseUrl('/login');
};
