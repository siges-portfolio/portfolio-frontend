import { Directive, input } from '@angular/core';

@Directive({
  selector: '[scrollAnimation]',
  standalone: true,
  host: {
    '[class.scroll-animation]': 'true',
    '[style.--scroll-animation-name]': 'animationName()',
    '[style.--scroll-animation-range-start]': 'animationRangeStart()',
    '[style.--scroll-animation-range-end]': 'animationRangeEnd()',
    '[style.--scroll-animation-duration]': 'animationDuration()',
    '[style.--scroll-animation-delay]': 'animationDelay()',
    '[style.--scroll-animation-easing]': 'animationEasing()',
    '[style.--scroll-animation-fill-mode]': 'animationFillMode()',
    '[style.--scroll-animation-offset]': 'animationOffset()',
  },
})
export class ScrollAnimationDirective {
  readonly animationName = input<string>('fadeIn', { alias: 'scrollAnimation' });
  readonly animationRangeStart = input<string>('entry 0%');
  readonly animationRangeEnd = input<string>('exit 100%');
  readonly animationDuration = input<string>('0.8s');
  readonly animationDelay = input<string>('0s');
  readonly animationEasing = input<string>('cubic-bezier(0.22, 1, 0.36, 1)');
  readonly animationFillMode = input<string>('both');
  readonly animationOffset = input<string>('24px');
}
