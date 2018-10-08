import { Action } from '@ngrx/store';
import { type } from '@app/shared/helpers/type.helpers';

/***** models  ****/
import { User } from '@app/features/users/models/user.model';


export const ActionTypes = {
    FETCH_USERS_START:                              type('[Users] Fetch Users Start'),
    FETCH_USERS_SUCCEED:                            type('[Users] Fetch Users Succeed'),
    FETCH_USERS_FAILED:                             type('[Users] Fetch Users Failed'),
    ADD_USER:                                       type('[Users] Add Users Start'),
    DELETE_USER:                                    type('[Users] Delete User'),
    UPDATE_USER:                                    type('[Users] Update User'),
};

export class FetchUsersStartActions implements Action {
  type = ActionTypes.FETCH_USERS_START;
  constructor(public payload?: any) { }
}


export class FetchUsersSucceedActions implements Action {
    readonly type = ActionTypes.FETCH_USERS_SUCCEED;
    constructor(public payload: User[]) { }
  }

export class FetchUsersFailedActions implements Action {
    type = ActionTypes.FETCH_USERS_FAILED;
    constructor(public payload?: any) { }
}

export class AddUserActions implements Action {
    readonly type = ActionTypes.ADD_USER;
    constructor(public payload: User) { }
}

export class DeleteUserActions implements Action {
    type = ActionTypes.DELETE_USER;
    constructor(public payload: number) { }
}

export class UpdateUserActions implements Action {
    type = ActionTypes.UPDATE_USER;
    constructor(public payload: User) { }
}

export type Actions
  = FetchUsersStartActions
  | FetchUsersSucceedActions
  | FetchUsersFailedActions
  | AddUserActions
  | DeleteUserActions
  | UpdateUserActions

