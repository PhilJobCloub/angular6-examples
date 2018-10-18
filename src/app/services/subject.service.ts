import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  public userActivated = new BehaviorSubject(0);
  constructor() { }

  resetUserActivated() {
    this.userActivated.next(0);
  }

  getUserActivated() {
    return this.userActivated.getValue();
  }

  setUserActivated(val : number) {
    this.userActivated.next(val);
  }
}
