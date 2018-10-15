import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

/**** model ****/
import { Membership } from '@app/features/membership/models/membership.model';

/**** reducer ****/
import * as fromMembership from '@app/features/membership/store/reducers/membership.reducer';
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
  

  constructor(
    private router : ActivatedRoute,
    private store : Store<fromRoot.State>
    ) {
      this.users$ = this.router.parent.parent.params.switchMap(params => {

        return this.store
          .select(fromUsersSelectors.getUsersList)
          .map((users : any) => users.find(user => user.id === parseInt(params.userId)
            ));
      });
    }

  ngOnInit() {
    this.store.dispatch(new membershipActions.FecthMembershipStartActions());
    this.membershipList$ = this.store.select(fromMembershipSelectors.getMembershipList);
  }

  

}
