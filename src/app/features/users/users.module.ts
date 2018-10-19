import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/***** modules ****/
import { SharedModule } from '@app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

/*****Components****/
import * as fromComponents from './components';

/*****Pages****/
import * as fromPages from './pages';

/***** routing ****/
import { UsersRoutingModule } from './users-routing.module';

/***** effects *****/
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from '@app/features/users/store/effects/users.effects';

/***** reducers *****/
import { usersReducer } from '@app/features/users/store/reducers/users.reducers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    UsersRoutingModule,
    StoreModule.forFeature('usersState', usersReducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  declarations: [
    fromComponents.components,
    fromPages.pages
  ],
  exports: [
    fromComponents.components,
    fromPages.pages
  ],
  entryComponents : [
    fromComponents.UsersListComponent
  ]
})
export class UsersModule { }
