import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(public _auth : AuthService, public _router : Router) {}

  canActivate() : boolean {
    if (!this._auth.isAuthenticated()) {
      this._router.navigate(['']);
      return false;
    }
    return true;
  }

}