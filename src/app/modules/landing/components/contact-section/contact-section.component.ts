import { Component, inject, OnDestroy, signal } from "@angular/core";
import { ContactsComponent } from "@shared/components/contacts/contacts.component";
import { FormFieldComponent } from "@shared/components/form-field/form-field.component";
import { MatIcon } from "@angular/material/icon";
import { InputComponent } from "@shared/components/input/input.component";
import { FormControl, FormGroup, MaxLengthValidator, ReactiveFormsModule, Validators } from "@angular/forms";
import { ButtonComponent } from "@shared/components/button/button.component";
import { emailValidator } from "@core/validators/email.validator";
import { ScrollAnimationDirective } from "@shared/directives/scroll-animation.directive";
import { ContactService } from "@core/services/contact";
import { finalize, Subject, takeUntil } from "rxjs";
import { ToastService } from "@shared/components/toast/toast.service";

@Component({
    selector: '[contact-section]',
    templateUrl: './contact-section.component.html',
    styleUrl: './contact-section.component.scss',
    imports: [ContactsComponent, FormFieldComponent, MatIcon, InputComponent, ReactiveFormsModule, ButtonComponent, ScrollAnimationDirective],
})
export class ContactSectionComponent implements OnDestroy {
    toast = inject(ToastService);

    destroy$ = new Subject<void>
    
    loading = signal<boolean>(false);
    contactService = inject(ContactService)

    contactForm = new FormGroup({
        name: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.maxLength(64), Validators.minLength(3)]}),
        email: new FormControl('', {nonNullable: true, validators: [Validators.required, emailValidator()]}),
        message: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.maxLength(2000)]}),
    })
    
    sendMessage() {
        this.loading.set(true);
        
        this.contactService.sendMessage(this.contactForm.getRawValue())
        .pipe(takeUntil(this.destroy$), finalize(() => this.loading.set(false)))
        .subscribe({
            complete: () => {
                this.toast.showToast('success', 'The message was sent successfully. Thank you for contact, I will get back to you as soon as possible. 🤝', 'check');
            },

            error: (error) => {
                switch (error.code) {
                    default:
                        this.toast.showToast('error', 'Unexpected error. Please use another way to contact.', 'close');
                        console.error(error);
                }
            },
        })
    }
    
    ngOnDestroy(): void {
        this.destroy$.next()
        this.destroy$.complete()
    }
}