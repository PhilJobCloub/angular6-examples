import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

/**** model ****/
import { User } from '@app/features/users/models/user.model';

/**** reducer ****/
import * as fromUsers from '@app/features/users/store/users.reducers';

/**** selectors ****/
import * as fromUsersSelectors from '@app/features/users/store/users.selectors';

/**** actions ****/
import * as usersActions from '@app/features/users/store/users.actions';

@Component({
  selector: 'app-user-details',
  template: `
    <h1>USER DETAILS</h1>
  {{ (user$ | async) | json }}
  `,
  styles : [
      ``
    ]
})

export class UserDetailsPage implements OnInit {
  public user$ : Observable<User>


  constructor(private store: Store<fromUsers.FeatureState>) {}

  ngOnInit() {
    this.user$ = this.store.select(fromUsersSelectors.getUserById);
  }

  /*
      this._activatedRoute.params.subscribe(
      (params: Params) => {
        let userId = params['userId'];
        this.readUser(userId)
    });
  readUser(userId) {
    this._userService
        .read(userId)
        .subscribe(
          (user : User) => {
            this.user = user;
          }
        )
  }
  */
}
