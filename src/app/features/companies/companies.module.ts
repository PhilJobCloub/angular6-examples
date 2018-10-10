import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


/***** modules ****/
import { SharedModule } from '@app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http'; 
import { StoreModule } from '@ngrx/store';

/*****Components****/
import * as fromComponents from '@app/features/companies/components';

/*****Pages****/
import * as fromPages from './pages';

/***** routing ****/
import { CompaniesRoutingModule } from './companies-routing.module';

import { companiesReducer } from '@app/features/companies/store/reducers/companies.reducers';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    CompaniesRoutingModule,
    StoreModule.forFeature('companiesState', companiesReducer)
  ],
  declarations: [
    fromComponents.components,
    fromPages.pages
  ],
  exports: [
    fromPages.pages
  ]
})
export class CompaniesModule { }
