import * as listComponents from './lists';
import * as cardsComponents from './cards';
import { AuthLoginComponent } from './auth-login/auth-login.component';

export const components : any[] = [
    ...listComponents.components,
    ...cardsComponents.components,
    AuthLoginComponent
  ];

