import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs/observable';

/***** models *****/
import { Company } from '../../models/company.model';

/**** reducer ****/
import * as fromCompanies from '@app/features/companies/store/reducers/companies.reducers';

/**** actions ****/
import * as companiesActions from '@app/features/companies/store/actions/companies.actions';

/**** selector ****/
import * as fromCompaniesSelectors from '@app/features/companies/store/selectors/companies.selector';


@Component({
  selector: 'app-companies-home',
  template: `
    <h1>COMPANIES HOME PAGE</h1>
    <app-companies-form
      (handleAddCompany)="addCompany($event)">
    </app-companies-form>
    <app-companies-list
      [companies]="companies$ | async"
      (handleDeleteCompany)="deleteCompany($event)">
    </app-companies-list>
  `,
  styles : [
      ``
    ]
})

export class CompaniesHomePage implements OnInit  {

  public companies$ : Observable<Company[]>;
  constructor(private _store: Store<fromCompanies.FeatureState>) { }

  ngOnInit() {
    this.companies$ = this._store.select(fromCompaniesSelectors.getCompaniesList);
  }

  addCompany(company : Company) {
    this._store.dispatch(
      new companiesActions.AddCompanyActions(company)
      );
  }

  deleteCompany(id) {
    this._store.dispatch(
      new companiesActions.DeleteCompanyActions(id)
      );
  }
}