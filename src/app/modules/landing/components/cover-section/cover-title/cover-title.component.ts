import { Component, computed, input, ViewEncapsulation } from "@angular/core";
import { ScrollAnimationDirective } from "@shared/directives/scroll-animation.directive";

@Component({
    selector: 'cover-title',
    encapsulation: ViewEncapsulation.None,
    styleUrl: './cover-title.component.scss',
    templateUrl: './cover-title.component.html',
    imports: [ScrollAnimationDirective],
})
export class CoverTitleComponent {
    title = input.required<string>()

    words = computed(() => {
        return this.title().split(' ')
    })
}