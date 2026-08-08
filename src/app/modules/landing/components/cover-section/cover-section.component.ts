import { Component } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { ButtonComponent } from "@shared/components/button/button.component";
import { ContactsComponent } from "@shared/components/contacts/contacts.component";
import { ScrollAnimationDirective } from "@shared/directives/scroll-animation.directive";
import { CoverTitleComponent } from "./cover-title/cover-title.component";

@Component({
    selector: "[cover-section]",
    templateUrl: "./cover-section.component.html",
    styleUrls: ["./cover-section.component.scss"],
    imports: [ButtonComponent, MatIcon, ContactsComponent, ScrollAnimationDirective, CoverTitleComponent]
})
export class CoverSectionComponent {}