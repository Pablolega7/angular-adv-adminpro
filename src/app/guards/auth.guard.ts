import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private ususarioService:UsuarioService, private router:Router){};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

     return this.ususarioService.validarToken().
     pipe(
       tap(estaAutentificado=>{
         if (!estaAutentificado) {
           this.router.navigateByUrl('/login');
         };
       }),
     );
  };
};
