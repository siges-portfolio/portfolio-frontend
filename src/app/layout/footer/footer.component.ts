import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MainLogoComponent } from '@shared/components/main-logo/main-logo.component';

@Component({
  standalone: true,
  selector: '[app-footer]',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [MainLogoComponent, MatIcon],
})
export class FooterComponent {}
