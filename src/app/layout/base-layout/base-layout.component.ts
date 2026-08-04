import { Component } from '@angular/core';
import { FooterComponent } from '@layout/footer/footer.component';
import { HeaderComponent } from '@layout/header/header.component';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.scss',
  imports: [HeaderComponent, FooterComponent],
  host: {
    class: 'base-layout',
  },
})
export class BaseLayoutComponent {}
