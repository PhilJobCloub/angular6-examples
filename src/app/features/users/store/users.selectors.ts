import { createSelector, createFeatureSelector } from '@ngrx/store';

/**** main reducer ****/
import * as fromRoot from '@app/store';
import * as fromFeatures from './users.reducers';


export const getUserState = createFeatureSelector<fromFeatures.State>('usersState');

export const getAllUsers = createSelector(
    getUserState,
    state => state.entities
)

/* transform my obj in an array */
export const getUsersList = createSelector(
    getAllUsers,
    entities => Object.keys(entities).map(key => entities[key])
)

export const getUserById = createSelector(
    getAllUsers,
    fromRoot.getRouterState,
    (entities, router) => {
        return router.state &&
            entities[router.state.params.userId]
    }
)