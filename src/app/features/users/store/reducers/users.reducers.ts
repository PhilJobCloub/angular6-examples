import { UtilsHelpers } from '@app/shared/helpers/utils.helpers';

/**** main reducer ****/
import * as fromApp from '@app/store';

/***** actions  ****/
import * as UsersActions from '@app/features/users/store/actions/users.actions';

/***** models  ****/
import { User } from '@app/features/users/models/user.model';

/***** state interface  ****/
export interface FeatureState extends fromApp.State {
    usersState : State;
  }

export interface State {
    entities : { [id : number ] : User };
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
const fetchingUsersStart = (state, action) => {
    return UtilsHelpers.prototype.updateObject(state,
      {
        loading: true,
        loaded : false,
      });
  };

const fetchingUsersSucceed = (state, action) => {
    /**use entity pattern ***/
    const entities = UtilsHelpers.prototype.flatten(action.payload);
    return UtilsHelpers.prototype.updateObject(state,
        {
            loading: false,
            loaded: true,
            errors : null,
            entities
        });
};

const fetchingUsersFailed = (state, action) => {
    const errors = action.payload;
    return UtilsHelpers.prototype.updateObject(state,
        {
            loading: false,
            loaded: true,
            errors
        });
};

const addUser = (state, action) => {
    const user : User = action.payload;
    const entities = {
        ...state.entities,
        [user.id]: user,
      };

    return UtilsHelpers.prototype.updateObject(state,
        {
            entities
        });
};

const deleteUser = (state, action) => {
    const userId = action.payload;
    const { [userId]: removed, ...entities } = state.entities;

    return UtilsHelpers.prototype.updateObject(state,
        {
            entities
        });
};
/***** reducer  ****/
export function usersReducer(state = initialState, action : UsersActions.Actions) : State {
    switch (action.type) {
        case UsersActions.ActionTypes.FETCH_USERS_START: { return fetchingUsersStart(state, action); }
        case UsersActions.ActionTypes.FETCH_USERS_SUCCEED: { return fetchingUsersSucceed(state, action); }
        case UsersActions.ActionTypes.FETCH_USERS_FAILED: { return fetchingUsersFailed(state, action); }
        case UsersActions.ActionTypes.ADD_USER: { return addUser(state, action); }
        case UsersActions.ActionTypes.DELETE_USER: { return deleteUser(state, action); }
        default: return state;
    }
}
