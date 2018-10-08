import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/*****Pages****/
import * as fromPages from '@app/features/companies/pages';

export const routes: Routes = [
  {
    path: '',
    component: fromPages.CompaniesHomePage,
    children: [  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CompaniesRoutingModule { }

