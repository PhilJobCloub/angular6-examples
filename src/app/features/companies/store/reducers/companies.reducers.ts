import { UtilsHelpers } from '@app/shared/helpers/utils.helpers';

/**** main reducer ****/
import * as fromApp from '@app/store';

/***** actions  ****/
import * as CompaniesActions from '@app/features/companies/store/actions/companies.actions';

/***** models  ****/
import { Company } from '@app/features/companies/models/company.model';

/***** state interface  ****/
export  interface FeatureState extends fromApp.State {
    companiesState: State
}

export interface State {
    entities : {},
}

/***** initial state  ****/
const initialState: State = {
    entities : {
        '12345' : { id : 12345, name: 'my company', description : 'this is a description'},
        '6757' : { id : 6757, name: 'my company new', description : 'this is a  company description'}
    }
}

/***** methods  ****/
const fetchCompanies = (state, action) => {
    return UtilsHelpers.prototype.updateObject(this.state,
        {

        })
}

const addCompany = (state, action) => {

    const newCompany = action.payload;
    const entities = {
        ...state.entities,
        [newCompany.id] : newCompany
    }
    return UtilsHelpers.prototype.updateObject(state,
        {
            entities
        })
}

const deleteCompany = (state, action) => {
    const deleteCompanyId = action.payload;
    const { [deleteCompanyId]: removed, ...entities } = state.entities;

    return UtilsHelpers.prototype.updateObject(state,
        {
            
            entities
        })
}

/***** reducer  ****/
export function companiesReducer(state = initialState , action: CompaniesActions.Actions) : State {
    switch(action.type) {
        case CompaniesActions.ActionTypes.FETCH_COMPANIES: { return fetchCompanies(state, action)};
        case CompaniesActions.ActionTypes.ADD_COMPANY: { return addCompany(state, action)};
        case CompaniesActions.ActionTypes.DELETE_COMPANY: { return deleteCompany(state, action)};
        default: return state;
    }
}