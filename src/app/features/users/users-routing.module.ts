import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/*****guard****/
import { MembershipGuard } from '@app/features/membership/guards/membership.guard';


/*****Pages****/
import * as fromPages from './pages';

/*****Components****/
import * as fromComponents from './components';

export const routes : Routes = [
  { path: '',
    component: fromPages.UsersHomePage,
    children : [
      { path: 'listing', redirectTo : '' },
      { path: 'registration', component : fromComponents.UserFormComponent },
      { path: ':userId',
        component : fromPages.UserDetailsPage,
        canActivate: [MembershipGuard],
      children : [
        { path: '', redirectTo: 'membership', pathMatch: 'full' },
        { path: 'membership', loadChildren: '@app/features/membership/membership.module#MembershipModule'}
      ]},
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class UsersRoutingModule { }


