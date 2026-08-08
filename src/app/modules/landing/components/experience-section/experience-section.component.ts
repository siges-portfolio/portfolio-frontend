import { Component } from "@angular/core";
import { ScrollAnimationDirective } from "@shared/directives/scroll-animation.directive";

@Component({
    selector: "[experience-section]",
    templateUrl: "./experience-section.component.html",
    styleUrls: ["./experience-section.component.scss"],
    imports: [ScrollAnimationDirective]
})
export class ExperienceSectionComponent {}