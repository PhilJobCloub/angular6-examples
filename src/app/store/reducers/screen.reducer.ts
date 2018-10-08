import { UtilsHelpers } from '@app/shared/helpers/utils.helpers';

/***** actions  ****/
import * as mobileActions from '@app/store/actions/screen.actions';

/***** state interface  ****/
export type ScreenState = Readonly<{
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  }>;

/***** initial state  ****/
const initialState: ScreenState = {
  mobile: false,
  tablet: false,
  desktop: false,
};

/***** methods  ****/
const setScreen = (state, action) => {
  return UtilsHelpers.prototype.updateObject(state,
      {
        ...action.payload
      }  
    );
};

export function screenReducer(state: ScreenState = initialState,
                              action: mobileActions.Actions): ScreenState {
  switch (action.type) {
    case mobileActions.ActionTypes.SET_SCREEN: { return setScreen(state, action)};
    default:
      return state;
  }
}