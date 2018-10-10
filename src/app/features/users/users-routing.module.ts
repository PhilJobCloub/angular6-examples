import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/*****Pages****/
import * as fromPages from './pages';

/*****Components****/
import * as fromComponents from './components';

export const routes: Routes = [
  { path: '', 
    component: fromPages.UsersHomePage,
    children : [
      { path: 'listing', redirectTo : '' },
      { path: 'registration', component : fromComponents.UserFormComponent },
      { path: ':userId', component : fromPages.UserDetailsPage },
    ]
  }
  
  

  
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class UsersRoutingModule { }


