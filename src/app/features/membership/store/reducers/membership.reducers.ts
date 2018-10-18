import { UtilsHelpers } from '@app/shared/helpers/utils.helpers';

/***** models  ****/
import { Membership } from '@app/features/membership/models/membership.model';

/**** main reducer ****/
import * as fromApp from '@app/store';

/***** actions  ****/
import * as MembershipActions from '@app/features/membership/store/actions/membership.actions';

export interface FeatureState extends fromApp.State {
    membershipState : State;
}

export interface State {
    entities : { [id : number] :  Membership };
    loaded : boolean;
    loading : boolean;
    errors : any;
}

/***** initial state  ****/
const initialState : State = {
    entities : {},
    loaded: false,
    loading: false,
    errors : null
};

/***** methods  ****/
const fetchingMembershipStart = (state, action) => {
    return UtilsHelpers.prototype.updateObject(state,
      {
        loading : true,
        loaded : false,
      });
  };

const fetchingMembershipSucceed = (state, action) => {
    /**use entity pattern ***/
    const entities = UtilsHelpers.prototype.flatten(action.payload);
    return UtilsHelpers.prototype.updateObject(state,
        {
            loading : false,
            loaded : true,
            errors : null,
            entities
        });
};

const fetchingMembershipFailed = (state, action) => {
    const errors = action.payload;
    return UtilsHelpers.prototype.updateObject(state,
        {
            loading : false,
            loaded : true,
            errors
        });
};

/***** reducer  ****/
export function membershipReducer(state = initialState , action : MembershipActions.Actions) : State {
    switch (action.type) {
        case MembershipActions.ActionTypes.FETCH_MEMBERSHIP_START: { return fetchingMembershipStart(state, action); }
        case MembershipActions.ActionTypes.FETCH_MEMBERSHIP_SUCCEED: { return fetchingMembershipSucceed(state, action); }
        case MembershipActions.ActionTypes.FETCH_MEMBERSHIP_FAILED: { return fetchingMembershipFailed(state, action); }
        default: return state;
    }
}
