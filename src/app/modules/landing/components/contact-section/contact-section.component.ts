import { Component, signal } from "@angular/core";
import { ContactsComponent } from "@shared/components/contacts/contacts.component";
import { FormFieldComponent } from "@shared/components/form-field/form-field.component";
import { MatIcon } from "@angular/material/icon";
import { InputComponent } from "@shared/components/input/input.component";
import { FormControl, FormGroup, MaxLengthValidator, ReactiveFormsModule, Validators } from "@angular/forms";
import { ButtonComponent } from "@shared/components/button/button.component";
import { emailValidator } from "@core/validators/email.validator";
import { ScrollAnimationDirective } from "@shared/directives/scroll-animation.directive";

@Component({
    selector: '[contact-section]',
    templateUrl: './contact-section.component.html',
    styleUrl: './contact-section.component.scss',
    imports: [ContactsComponent, FormFieldComponent, MatIcon, InputComponent, ReactiveFormsModule, ButtonComponent, ScrollAnimationDirective],
})
export class ContactSectionComponent {
    contactForm = new FormGroup({
        name: new FormControl('', {validators: [Validators.required, Validators.maxLength(64), Validators.minLength(3)]}),
        email: new FormControl('', {validators: [Validators.required, emailValidator()]}),
        message: new FormControl('', {validators: [Validators.required, Validators.maxLength(2000)]}),
    })
}