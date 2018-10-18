import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

/**** reducer ****/
import * as fromRoot from '@app/store/reducers';

/**** actions ****/
import * as screenActions from '@app/store/actions/screen.actions';

@Injectable({
  providedIn: 'root'
})

export class AppSandboxService {
  // Subscribe on new values from the store
  mobile$ = this.store.select(state => state.screenState.desktop);
  tablet$ = this.store.select(state => state.screenState.tablet);
  desktop$ = this.store.select(state => state.screenState.desktop);

  constructor(private store : Store<fromRoot.State>) {
  }

  setWindowWidth(windowWidth : number) : void {
    // Send the new windowWitdth to the store
    this.store.dispatch(new screenActions.SetScreen(windowWidth));
  }
}
