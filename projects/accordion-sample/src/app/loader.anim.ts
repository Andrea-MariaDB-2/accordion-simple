import { trigger, transition, style, animate, keyframes } from '@angular/animations';

export const loaderIn = trigger('moveIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-3rem)' }),
    animate('1s ease-in-out', keyframes([
      style({ offset: .2, opacity: .1, transform: 'translateY(-1rem)' }),
      style({ offset: .6, opacity: .4, transform: 'translateY(-0.1rem)' }),
      style({ offset: 1, opacity: 1, transform: 'none' })
    ])
    )
  ])
]);
