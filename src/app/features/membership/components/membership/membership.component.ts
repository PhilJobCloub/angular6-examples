import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

/**** model ****/
import { Membership } from '@app/features/membership/models/membership.model';

/**** reducer ****/
import * as fromRoot from '@app/store/reducers';

/**** selectors ****/
import * as fromMembershipSelectors from '@app/features/membership/store/selectors/membership.selectors';

/**** actions ****/
import * as membershipActions from '@app/features/membership/store/actions/membership.actions';
/**** selectors ****/
import * as fromUsersSelectors from '@app/features/users/store/users.selectors';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {

  public membershipList$ : Observable<Membership[]>;
  public users$ : Observable<Membership[]>;

  constructor (
    private router : ActivatedRoute,
    private store : Store<fromRoot.State>
    ) {
      this.users$ = this.router.parent.parent.params.switchMap(params => {
        return this.store
          .select(fromUsersSelectors.getUsersList)
          .map((users : any) => users.find(user => user.id === parseInt(params.userId, 10)
            ));
      });

      this.membershipList$ = this.router.parent.parent.params.switchMap(params => {
        return this.store
          .select(fromMembershipSelectors.getMembershipList)
          .map((memberships : any) => memberships.filter(membertship =>   {
            console.log( membertship.userId === parseInt(params.userId, 10));
            return membertship.userId === parseInt(params.userId, 10)
          }
            ));
      });
    }

  ngOnInit() {
    this.store.dispatch(new membershipActions.FecthMembershipStartActions());
  }
}
