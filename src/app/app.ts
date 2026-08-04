import { Component, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
})
export class App {
  matIconRegistry: MatIconRegistry = inject(MatIconRegistry);
  sanitizer: DomSanitizer = inject(DomSanitizer);

  constructor() {
    this.matIconRegistry.addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/socials/github.svg'));
    this.matIconRegistry.addSvgIcon('mail', this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/socials/mail.svg'));
    this.matIconRegistry.addSvgIcon('linkedin', this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/socials/linkedin.svg'));
  }
}
