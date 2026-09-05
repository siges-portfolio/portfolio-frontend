import { Component } from '@angular/core';
import { HeaderComponent } from '@layout/header/header.component';
import { RouterOutlet } from '@angular/router';
import { ToastContainerComponent } from '@shared/components/toast/toast-container.component';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  imports: [HeaderComponent, RouterOutlet, ToastContainerComponent],
  host: {
    class: 'base-layout',
  },
})
export class BaseLayoutComponent {}
