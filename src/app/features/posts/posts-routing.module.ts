import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/*****Pages****/
import * as fromPages from './pages';

/*****Components****/
import * as fromComponents from './components';

export const routes: Routes = [
  { path: '', 
    component: fromPages.PostsHomePage,
    children : [
      { path: 'listing', redirectTo : '' },
      { path: 'registration', component : fromComponents.PostFormComponent },
      { path: ':postId', component : fromPages.PostDetailsPage }
    ]
  }
  
  

  
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class PostsRoutingModule { }


