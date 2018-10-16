import { createFeatureSelector, createSelector } from '@ngrx/store';

/**** main reducer ****/
import * as fromRoot from '@app/store';
import * as fromFeatures from '@app/features/membership/store/reducers/membership.reducer';


export const getMembershipState = createFeatureSelector<fromFeatures.State>('membershipState');

export const getAllMembership = createSelector(
    getMembershipState,
    state => state.entities
);

export const getMembershipLoaded = createSelector(
    getMembershipState,
    state => state.loaded
);

/* transform my obj in an array */
export const getMembershipList = createSelector(
    getAllMembership,
    entities => Object.keys(entities).map(key => entities[key])
);
