
import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeOut = trigger('fadeOut', [
  state('*', style({
    opacity: 1,
  })),
  state('in', style({
    opacity: 1,
  })),
  state('out',   style({
    opacity : 0,
  })),
  transition('* => in', animate('600ms ease-in')),
  transition('in => out', animate('600ms ease-in'))
]);