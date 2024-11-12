import { animate, style, transition, trigger } from "@angular/animations";

export const menuAnimation = trigger('menuAnimation', [
    transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }), // Start state
        animate('100ms ease-in', style({ opacity: 1, transform: 'scale(1)' })) // End state
    ]),
    transition(':leave', [
        animate('100ms ease-out', style({ opacity: 0, transform: 'scale(0.9)' })) // Exit animation
    ])
])