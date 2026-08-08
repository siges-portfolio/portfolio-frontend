import { Component, inject } from '@angular/core';
import { ButtonComponent } from "@shared/components/button/button.component";
import { MainLogoComponent } from "@shared/components/main-logo/main-logo.component";
import { ThemeSwitcherComponent } from "@layout/base-layout/theme-switcher/theme-switcher.component";
import { LenisService, ScrollToTarget } from '@core/services/lenis';
import { IS_MOBILE } from '@shared/tokens/is-mobile.token';
import { MatIcon } from "@angular/material/icon";
import { ContactsComponent } from '@shared/components/contacts/contacts.component';

@Component({
  standalone: true,
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [ButtonComponent, MainLogoComponent, ThemeSwitcherComponent, MatIcon, ContactsComponent],
})
export class HeaderComponent {
  lenis = inject(LenisService);
  isMobile = inject(IS_MOBILE)

  navigationItems: {label: string; target: ScrollToTarget}[] = [
    {
      label: 'Stack',
      target: '#tech-stack'
    },
    {
      label: 'Projects',
      target: '#projects'
    },
    {
      label: 'Experience',
      target: '#experience'
    },
    {
      label: 'Contact',
      target: '#contact'
    },
  ]

  scrollTo(target: ScrollToTarget) {
    this.lenis.scrollTo(target)
  }
}
