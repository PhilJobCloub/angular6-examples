import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  public userProfile$ = new BehaviorSubject({});
  constructor() { }

  resetUserUserProfile() {
    this.userProfile$.next(0);
  }

  getUserProfile() {
    return this.userProfile$.getValue();
  }

  setUserProfile(val : any) {
    this.userProfile$.next(val);
  }
}
