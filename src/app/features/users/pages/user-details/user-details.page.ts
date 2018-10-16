import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

/**** model ****/
import { User } from '@app/features/users/models/user.model';

/**** reducer ****/
import * as fromUsers from '@app/features/users/store/reducers/users.reducers';

/**** selectors ****/
import * as fromUsersSelectors from '@app/features/users/store/selectors/users.selectors';

/**** actions ****/
import * as usersActions from '@app/features/users/store/actions/users.actions';

@Component({
  selector: 'app-user-details',
  template: `
    <h1>USER DETAILS</h1>

  <router-outlet></router-outlet>
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

}
