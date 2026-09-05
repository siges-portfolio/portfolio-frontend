import { Component, inject, signal } from '@angular/core';
import { ContactsComponent } from '@shared/components/contacts/contacts.component';
import { FormFieldComponent } from '@shared/components/form-field/form-field.component';
import { MatIcon } from '@angular/material/icon';
import { InputComponent } from '@shared/components/input/input.component';
import {
  FormField,
  email,
  form,
  maxLength,
  minLength,
  required,
  submit,
} from '@angular/forms/signals';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ScrollAnimationDirective } from '@shared/directives/scroll-animation.directive';
import { ContactService } from '@core/services/contact';
import { firstValueFrom } from 'rxjs';
import { ToastService } from '@shared/components/toast/toast.service';

@Component({
  selector: '[contact-section]',
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
  imports: [
    ContactsComponent,
    FormFieldComponent,
    MatIcon,
    InputComponent,
    FormField,
    ButtonComponent,
    ScrollAnimationDirective,
  ],
})
export class ContactSectionComponent {
  toast = inject(ToastService);

  loading = signal<boolean>(false);
  contactService = inject(ContactService);

  contactModel = signal({
    name: '',
    email: '',
    message: '',
  });

  contactForm = form(this.contactModel, (schemaPath) => {
    required(schemaPath.name);
    minLength(schemaPath.name, 3);
    maxLength(schemaPath.name, 64);
    required(schemaPath.email);
    email(schemaPath.email);
    required(schemaPath.message);
    maxLength(schemaPath.message, 2000);
  });

  sendMessage() {
    submit(this.contactForm, async () => {
      this.loading.set(true);

      try {
        await firstValueFrom(this.contactService.sendMessage(this.contactModel()));
        this.toast.showToast(
          'success',
          'The message was sent successfully. Thank you for contact, I will get back to you as soon as possible. 🤝',
          'check',
        );
      } catch (error) {
        this.toast.showToast(
          'error',
          'Unexpected error. Please use another way to contact.',
          'close',
        );
        console.error(error);
      } finally {
        this.loading.set(false);
      }
    });
  }
}
