import { Component } from "@angular/core";
import { ScrollAnimationDirective } from "@shared/directives/scroll-animation.directive";

@Component({
    selector: "[tech-stack-section]",
    templateUrl: "./tech-stack.component.html",
    styleUrls: ["./tech-stack.component.scss"],
    imports: [ScrollAnimationDirective]
})
export class TechStackComponent {}