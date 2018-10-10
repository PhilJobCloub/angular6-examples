import { Action } from '@ngrx/store';
import { type } from '@app/shared/helpers/type.helpers';

/***** models  ****/
import { Company } from '@app/features/companies/models/company.model';

export const ActionTypes = {
    FETCH_COMPANIES:                  type('[Companies] Fetch companies'),
    ADD_COMPANY:                    type('[Companies] Add a company'),
    DELETE_COMPANY:                 type('[Companies] Delete a company')
}

export class FetchCompaniesActions implements Action {
    type = ActionTypes.FETCH_COMPANIES;
    constructor(public payload : Company[]) {}
}

export class AddCompanyActions implements Action {
    type = ActionTypes.ADD_COMPANY;
    constructor(public payload : Company) {}
}

export class DeleteCompanyActions implements Action {
    type = ActionTypes.DELETE_COMPANY;
    constructor(public payload : number) {}
}

export type Actions
  = FetchCompaniesActions
  | AddCompanyActions
  | DeleteCompanyActions