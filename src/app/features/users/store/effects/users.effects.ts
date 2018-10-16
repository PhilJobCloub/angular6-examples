import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, withLatestFrom, map } from 'rxjs/operators';
import {Store} from '@ngrx/store';

/***** services  ****/
import { UsersService } from '@app/features/users/services/users.service';

/***** actions  ****/
import * as UsersActions from '@app/features/users/store/actions/users.actions';
import { ActionTypes } from "@app/features/users/store/actions/users.actions";

/***** models  ****/
import { User } from '@app/features/users/models/user.model';

/****** reducer ****/
import * as fromUsers from '@app/features/users/store/reducers/users.reducers';

@Injectable()
export class UsersEffects {
    constructor(
        private actions$: Actions, 
        private _usersService: UsersService,
        private store: Store<fromUsers.FeatureState>) {

    }


    @Effect()
    usersFetch = this.actions$
    .ofType(ActionTypes.FETCH_USERS_START)
    .pipe(switchMap((action: UsersActions.FetchUsersStartActions) => {
        return this._usersService
                    .list(null)
                    .pipe(map((users) => {
                        return {
                            type: ActionTypes.FETCH_USERS_SUCCEED,
                            payload: users
                            };
                        }
                    ))
            })
    )
}

