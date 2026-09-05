import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ScrollAnimationDirective } from '@shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: 'contacts.component.scss',
  imports: [MatIcon, ScrollAnimationDirective],
})
export class ContactsComponent {}
