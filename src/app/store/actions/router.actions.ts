// from ngrx
import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';


export const GO = '[Router] Go';
export const BACK = '[Router] Back' ;
export const FORWARD = '[Router] Forward';


export class Go implements Action {
    readonly type = GO;

    constructor(
        public payload : {
            path : any[];
            query? : object;
            extra? : NavigationExtras

        }) {}

}

export class Back implements Action {
    readonly type = BACK;
}

export class Forward implements Action {
    readonly type = FORWARD;
}

// action types

export type routerActions =
| Go
| Back
| Forward;
