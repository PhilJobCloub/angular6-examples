import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/observable';
import { filter, map, switchMap, take, tap } from 'rxjs/operators'
import { of } from 'rxjs/observable/of';

/**** reducer ****/
import * as fromMembership from '@app/features/membership/store/reducers/membership.reducer';

/**** selectors ****/
import * as fromMembershipSelectors from '@app/features/membership/store/selectors/membership.selectors';

/**** actions ****/
import * as membershipActions from '@app/features/membership/store/actions/membership.actions';

@Injectable({
    providedIn: 'root'
  })

export class MembershipGuard implements CanActivate {
  constructor(private store : Store<fromMembership.FeatureState>) {}

  Checkstore() : Observable<boolean> {
    return this.store
      .select(fromMembershipSelectors.getMembershipLoaded)
      .pipe(
          tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new membershipActions.FecthMembershipStartActions());
        }
      }),
      filter(loaded => loaded),
      take(1)
      );
  }

  hasUser(id : number) :  Observable<boolean> {
      return this.store
      .select(fromMembershipSelectors.getMembershipList)
      .pipe(
          map((entities : { [key : number] : any}) => !!entities[id]),
          take(1)
      );

  }

  canActivate(route :  ActivatedRouteSnapshot) : Observable<boolean> {
    return this.Checkstore()
      .pipe(
          switchMap(() => {
              const id = parseInt(route.params.userId, 10);
              return this.hasUser(id);
          }
          )
      );
  }
}
