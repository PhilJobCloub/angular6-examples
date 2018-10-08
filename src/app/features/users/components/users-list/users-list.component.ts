import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

/**** model ****/
import { User } from '@app/features/users/models/user.model';

/**** reducer ****/
import * as fromUsers from '@app/features/users/store/users.reducers';

/**** actions ****/
import * as usersActions from '@app/features/users/store/users.actions';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  
})
export class UsersListComponent {

  @Input() users : User[] = [];

  constructor(
    private router : Router,
    private store: Store<fromUsers.FeatureState>
    ) {}

  removeUser({id}) {
    this.store.dispatch(new usersActions.DeleteUserActions(id));
  }

  navigateToUserDetails({id}) {
    this.router.navigate(['users', id]);
  }

}
