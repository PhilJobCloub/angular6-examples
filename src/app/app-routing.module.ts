import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

/****** Core Pages ******/
import * as fromCorePages from '@app/core/pages';

const routes: Routes = [
  { path: 'posts', loadChildren: '@app/features/posts/posts.module#PostsModule'},
  { path: 'users', loadChildren: '@app/features/users/users.module#UsersModule'},
  { path: 'companies', loadChildren: '@app/features/companies/companies.module#CompaniesModule'},
  { path: '404', component: fromCorePages.Error404Page},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}