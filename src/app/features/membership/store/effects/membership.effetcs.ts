import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

/***** services  ****/
import { MembershipService } from '@app/features/membership/services/membership.service';

/***** actions  ****/
import * as MembershipActions from '@app/features/membership/store/actions/membership.actions';
import { ActionTypes } from '@app/features/membership/store/actions/membership.actions';

/***** models  ****/
import { User } from '@app/features/users/models/user.model';

/****** reducer ****/
import * as fromUsers from '@app/features/users/store/users.reducers';

@Injectable()
export class UsersEffects {
    constructor(
        private actions$ : Actions,
        private _membershipService : MembershipService,
        private store : Store<fromUsers.FeatureState>) {

    }

    @Effect()
    usersFetch = this.actions$
    .ofType(ActionTypes.FETCH_MEMBERSHIP)
    .pipe(switchMap((action : MembershipActions.FetchMembershipActions) => {
        return this._membershipService
                    .list(null)
                    .pipe(map((users) => {
                        return {
                            type: ActionTypes.FETCH_MEMBERSHIP,
                            payload: users
                            };
                        }
                    ));
            })
    );
}

