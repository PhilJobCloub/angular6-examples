import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*****Components****/
import * as fromComponents from '@app/features/membership/components';

export const routes : Routes = [
  {
    path: '',
    component : fromComponents.MembershipComponent,
    children : []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MembershipRoutingModule {}
