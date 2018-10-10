import { createSelector, createFeatureSelector } from '@ngrx/store';


/**** main reducer ****/
import * as fromFeatures from '@app/features/companies/store/reducers/companies.reducers';

export const getCompaniesState = createFeatureSelector<fromFeatures.State>('companiesState');

export const getAllCompanies = createSelector(
    getCompaniesState,
    state => {
        
        return state.entities
    }
)

/* transform my obj in an array */
export const getCompaniesList = createSelector(
    getAllCompanies,
    (entities) => {
        
        return Object.keys(entities).map(key => entities[key])
    }
)
