import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/***** routing ****/
import { MembershipRoutingModule } from './membership-routing.module';

/***** modules ****/
import { SharedModule } from '@app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

/***** components ****/
import * as fromComponents from './components';

/***** reducer ****/
import { membershipReducer } from '@app/features/membership/store/reducers/membership.reducer';

/***** effects *****/
import { EffectsModule } from '@ngrx/effects';
import { MembershipEffects } from './store/effects/membership.effects';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    MembershipRoutingModule,
    StoreModule.forFeature('membershipState', membershipReducer),
    EffectsModule.forFeature([MembershipEffects])
  ],
  declarations: [
    ...fromComponents.components
  ]
})
export class MembershipModule { }
