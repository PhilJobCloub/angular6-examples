import { UtilsHelpers } from '@app/shared/helpers/utils.helpers';

/**** main reducer ****/
import * as fromApp from '@app/store';

/***** actions  ****/
import * as MembershipActions from '@app/features/membership/store/actions/membership.actions';

/***** models  ****/
import { Membership } from '@app/features/membership/models/membership.model';

/***** state interface  ****/
export  interface FeatureState extends fromApp.State {
    membershipState : State;
}

export interface State {
    entities : { [id : number] : Membership };
}

/***** initial state  ****/
const initialState : State = {
    entities : {
        '12345' : { id : 12345, name: 'my member', description : 'this is a description'},
        '6757' : { id : 6757, name: 'my member new', description : 'this is a member description'}
    }
};

/***** methods  ****/
/* const fetchMembership = (state, action) => {
    return UtilsHelpers.prototype.updateObject(this.state,
        {

        });
}; */

/* const addMembership = (state, action) => {

    const newCompany = action.payload;
    const entities = {
        ...state.entities,
        [newCompany.id] : newCompany
    };
    return UtilsHelpers.prototype.updateObject(state,
        {
            entities
        });
};

const deleteMembership = (state, action) => {
    const deleteCompanyId = action.payload;
    const { [deleteCompanyId]: removed, ...entities } = state.entities;

    return UtilsHelpers.prototype.updateObject(state,
        {
            entities
        });
}; */

/***** reducer  ****/
export function membershipReducer(state = initialState , action : MembershipActions.Actions) : State {
    switch (action.type) {
        // case MembershipActions.ActionTypes.FETCH_MEMBERSHIP: { return fetchMembership(state, action); }
        // case MembershipActions.ActionTypes.ADD_MEMBERSHIP: { return addMembership(state, action); }
        // case MembershipActions.ActionTypes.DELETE_MEMBERSHIP: { return deleteMembership(state, action); }
        default: return state;
    }
}
