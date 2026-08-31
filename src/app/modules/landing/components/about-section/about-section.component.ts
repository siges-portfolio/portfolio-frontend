import { Component, inject } from "@angular/core";
import { LenisService, ScrollToTarget } from "@core/services/lenis";
import { ButtonComponent } from "@shared/components/button/button.component";
import { MatIcon } from "@angular/material/icon";

@Component({
    selector: '[about-section]',
    standalone: true,
    templateUrl: './about-section.component.html',
    styleUrl: './about-section.component.scss',
    imports: [ButtonComponent, MatIcon]
})
export class AboutSectionComponent {
    lenis = inject(LenisService);

    scrollTo(target: ScrollToTarget) {
        this.lenis.scrollTo(target)
    }
}