import { Component } from '@angular/core';
import { ButtonComponent } from "@shared/components/button/button.component";
import { MainLogoComponent } from "@shared/components/main-logo/main-logo.component";

@Component({
  standalone: true,
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [ButtonComponent, MainLogoComponent],
})
export class HeaderComponent {}
