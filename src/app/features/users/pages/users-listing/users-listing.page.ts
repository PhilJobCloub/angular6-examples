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
  selector: 'app-users-listing',
  template: `
    <app-users-list
      [users]="usersList$ | async">
    </app-users-list>
  `,
  styles : [
      ``
    ]
})

export class UsersListingPage implements OnInit {
  public usersList$ : Observable<User[]>

  constructor(
    private store: Store<fromUsers.FeatureState>
    ) {}

  ngOnInit() {
    this.store.dispatch(new usersActions.FetchUsersStartActions());
    this.usersList$ = this.store.select(fromUsersSelectors.getUsersList);
  }

}
