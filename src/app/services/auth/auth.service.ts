import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth0-variables';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserProfileService } from '@app/services/user-profile.service';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

// const auth0 = require('auth0-js');
import * as auth0 from 'auth0-js';


(window as any).global = window;

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userProfile : any;
  public profile$ = new BehaviorSubject(0)
  requestedScopes = 'openid profile read:messages write:messages';
  auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    audience: AUTH_CONFIG.audience,
    responseType: 'token id_token',
    redirectUri: AUTH_CONFIG.callbackURL,
    scope: this.requestedScopes
  });

  constructor(
    public router: Router,
    private _userProfileService : UserProfileService) {}

  public login(): void {
    this.auth0.authorize();
  }

  public initializeApp(): Promise<any> {
    return new Promise((resolve, reject) => {
          console.log(`initializeApp:: inside promise`);
 
          setTimeout(() => {
            console.log(`initializeApp:: inside setTimeout`);
            // doing something
 
            resolve();
          }, 3000);
        });
  }

  public handleAuthentication(): void {

    this.auth0.parseHash((err : any, authResult : any) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.router.navigate(['/users']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }

      this.getProfile((err, profile) => {
        this._userProfileService.setUserProfile(profile);
      });
    });
  }
  public getProfile(cb : any) : void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err : any, profile : any) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  private setSession(authResult : any): void {

    const scopes = authResult.scope || this.requestedScopes || '';

    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('scopes', JSON.stringify(scopes));
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('scopes');

    this._userProfileService.setUserProfile({});
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
   
    return new Date().getTime() < expiresAt;
  }

  public userHasScopes(scopes: Array<string>): boolean {
    const grantedScopes = JSON.parse(localStorage.getItem('scopes')).split(' ');
    return scopes.every(scope => grantedScopes.includes(scope));
  }

}