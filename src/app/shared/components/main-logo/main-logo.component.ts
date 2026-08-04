import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
    selector: "main-logo",
    templateUrl: "./main-logo.component.html",
    styleUrls: ["./main-logo.component.scss"],
    imports: [NgClass]
})
export class MainLogoComponent {
    color = input<'primary' | 'secondary'>('primary')
}