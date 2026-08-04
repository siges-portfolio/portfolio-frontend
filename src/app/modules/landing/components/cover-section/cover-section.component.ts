import { Component } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { ButtonComponent } from "@shared/components/button/button.component";

@Component({
    selector: "[cover-section]",
    templateUrl: "./cover-section.component.html",
    styleUrls: ["./cover-section.component.scss"],
    imports: [ButtonComponent, MatIcon]
})
export class CoverSectionComponent {}