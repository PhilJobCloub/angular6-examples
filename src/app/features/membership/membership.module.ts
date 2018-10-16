import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*****Routing****/
import { MembershipRoutingModule } from './membership-routing.module';

/***** modules ****/
import { SharedModule } from '@app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

/*****Components****/
import * as fromComponents from '@app/features/membership/components';

import { membershipReducer } from '@app/features/membership/store/reducers/membership.reducers';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    MembershipRoutingModule,
    StoreModule.forFeature('membershipState', membershipReducer)
  ],
  declarations: [ ...fromComponents.components ]
})

export class MembershipModule { }
