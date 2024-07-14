// animations.ts
import { trigger, transition, style, animate, sequence, query, stagger } from '@angular/animations';

export const slideInAnimation = trigger('slideIn', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate('0.4s ease-in', style({ transform: 'translateX(0%)' }))
  ]),
  transition(':leave', [
    animate('0.4s ease-out', style({ transform: 'translateX(100%)' }))
  ])
]);

export const fadeAnimation = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.5s ease-in', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('0.5s ease-out', style({ opacity: 0 }))
  ])
]);


// export const staggerAnimation = trigger('animation', [
//   transition('* <=> *', [
//     query(':enter', [
//       style({opacity: 0, transform: 'scale(0.7)'}),
//       stagger(100, [
//         animate('500ms ease-in', style({opacity: 1, transform: 'scale(1)'}))
//       ])
//     ], { optional: true }),
//     query(':leave', [
//       style({opacity: 1, transform: 'scale(1)'}),
//       stagger(-100, [
//         animate('500ms ease-in', style({opacity: 0, transform: 'scale(0.7)'}))
//       ])
//     ], { optional: true })
//   ])
// ])
