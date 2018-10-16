import { createFeatureSelector, createSelector } from '@ngrx/store';


/**** main reducer ****/
import * as fromFeatures from '@app/features/membership/store/reducers/membership.reducers';

export const getMembershipState = createFeatureSelector<fromFeatures.State>('membershipState');

export const getAllMembership = createSelector(
    getMembershipState,
    state => {
        return state.entities;
    }
);

/* transform my obj in an array */
export const getMembershipList = createSelector(
    getAllMembership,
    (entities) => {
        return Object.keys(entities).map(key => entities[key]);
    }
);
