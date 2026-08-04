import { Component } from '@angular/core';
import { FooterComponent } from '@layout/footer/footer.component';
import { HeaderComponent } from '@layout/header/header.component';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  host: {
    class: 'base-layout',
  },
})
export class BaseLayoutComponent {}
