import { Component } from "@angular/core";
import { CoverSectionComponent } from "./components/cover-section/cover-section.component";

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    imports: [CoverSectionComponent]
})
export class LandingComponent {}