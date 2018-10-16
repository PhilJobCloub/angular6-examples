import { Action } from '@ngrx/store';
import { type } from '@app/shared/helpers/type.helpers';

/***** models  ****/
import { Membership } from '@app/features/membership/models/membership.model';

export const ActionTypes = {
    FETCH_MEMBERSHIP_START:               type('[Membership] Fetch membership starts'),
    FETCH_MEMBERSHIP_SUCCEED:             type('[Membership] Fetch membership succeed'),
    FETCH_MEMBERSHIP_FAILED:              type('[Membership] Fetch membership failed'),
};


export class FecthMembershipStartActions implements Action {
    readonly type = ActionTypes.FETCH_MEMBERSHIP_START;
}

export class FecthMembershipFailedActions implements Action {
    readonly type = ActionTypes.FETCH_MEMBERSHIP_SUCCEED;
    constructor(public payload : Membership[]) {}
}

export class FecthMembershipSucceedActions implements Action {
    readonly type = ActionTypes.FETCH_MEMBERSHIP_FAILED;
    constructor(public payload : any) {}
}

export type Actions
    = FecthMembershipStartActions
    | FecthMembershipFailedActions
    | FecthMembershipSucceedActions;
