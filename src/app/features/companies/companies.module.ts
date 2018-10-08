import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


/***** modules ****/
import { SharedModule } from '@app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http'; 


/*****Components****/
import * as fromComponents from '@app/features/companies/components';

/*****Pages****/
import * as fromPages from './pages';

/***** routing ****/
import { CompaniesRoutingModule } from './companies-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    CompaniesRoutingModule
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
