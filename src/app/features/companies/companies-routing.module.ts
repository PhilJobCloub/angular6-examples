import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/*****Pages****/
import * as fromPages from '@app/features/companies/pages';

/*****Pages****/
import * as fromComponents from '@app/features/companies/components';

export const routes: Routes = [
  {
    path: '',
    component: fromPages.CompaniesHomePage,
    children: []
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CompaniesRoutingModule { }

