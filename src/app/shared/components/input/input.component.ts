import { Directive, ElementRef, inject, input, signal } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { FormFieldControl } from '@shared/components/form-field/form-field-control';

@Directive({
  standalone: true,
  selector: 'input[rs-input], textarea[rs-input]',
  host: {
    class: 'rs-input',
    '[attr.type]': 'type()',
  },
  providers: [{ provide: FormFieldControl, useExisting: InputComponent }],
})
export class InputComponent implements FormFieldControl<string> {
  ngControl = inject(NgControl, { optional: true });
  signalField = inject(FormField<string>, { optional: true });
  elementRef = inject<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(ElementRef);

  value = signal<string>('');
  disabled = input<boolean>(false);
  type = input<string>('text');
}
