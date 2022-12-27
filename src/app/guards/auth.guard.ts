import { Injectable } from '@angular/core';
import { Router } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { timeStamp } from 'console';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TokenService } from './../services/token.service';
import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor() {

    }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }
    private tokenService : TokenService,
    private authService : AuthService,
    private router : Router
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // const token = this.tokenService.getToken();
    // if (!token) {
    //   this.router.navigate(['/home']);
    //   return false;
    // }
    // return false;
    return this.authService.user$
    .pipe(
      map(user => {
        if (!user) {
          this.router.navigate(['/home']);
          return false;
        }
      })
    )
  }
}
