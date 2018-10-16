import { Action } from '@ngrx/store';
import { type } from '@app/shared/helpers/type.helpers';

/***** models  ****/
import { Membership } from '@app/features/membership/models/membership.model';

export const ActionTypes = {
    FETCH_MEMBERSHIP:               type('[Membership] Fetch membership'),
    ADD_MEMBERSHIP:                 type('[Companies] Add a company'),
    DELETE_MEMBERSHIP:              type('[Companies] Delete a company')
};

export class FetchMembershipActions implements Action {
    type = ActionTypes.FETCH_MEMBERSHIP;
    constructor(public payload : Membership[]) {}
}

/* export class AddMembershipActions implements Action {
    type = ActionTypes.ADD_MEMBERSHIP;
    constructor(public payload : Membership) {}
}

export class DeleteCompanyActions implements Action {
    type = ActionTypes.DELETE_MEMBERSHIP;
    constructor(public payload : number) {}
} */

export type Actions
  = FetchMembershipActions;
/*   | AddMembershipActions
  | DeleteCompanyActions; */
