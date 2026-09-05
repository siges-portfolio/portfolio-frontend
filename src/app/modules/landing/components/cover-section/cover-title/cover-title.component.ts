import { Component, computed, inject, input, ViewEncapsulation } from '@angular/core';
import { ScrollAnimationDirective } from '@shared/directives/scroll-animation.directive';
import { IS_MOBILE } from '@shared/tokens/is-mobile.token';

@Component({
  selector: 'cover-title',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './cover-title.component.scss',
  templateUrl: './cover-title.component.html',
  imports: [ScrollAnimationDirective],
})
export class CoverTitleComponent {
  isMobile = inject(IS_MOBILE);

  title = input.required<string>();

  words = computed(() => {
    return this.title().split(' ');
  });
}
