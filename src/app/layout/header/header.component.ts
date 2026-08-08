import { Component } from '@angular/core';
import { ButtonComponent } from "@shared/components/button/button.component";
import { MainLogoComponent } from "@shared/components/main-logo/main-logo.component";
import { ThemeSwitcherComponent } from "@layout/base-layout/theme-switcher/theme-switcher.component";
import { ScrollAnimationDirective } from "@shared/directives/scroll-animation.directive";

@Component({
  standalone: true,
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [ButtonComponent, MainLogoComponent, ThemeSwitcherComponent, ScrollAnimationDirective],
})
export class HeaderComponent {}
