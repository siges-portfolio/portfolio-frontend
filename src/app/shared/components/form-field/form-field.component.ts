import {
  AfterContentInit,
  Component,
  computed,
  contentChild,
  effect,
  input,
  OnDestroy,
  OnInit,
  signal, ViewEncapsulation
} from '@angular/core';
import { TouchedChangeEvent, ValidationErrors } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { Subject, takeUntil } from 'rxjs';
import { FormFieldControl } from '@shared/components/form-field/form-field-control';  
import { TooltipDirective } from '../tooltip/tooltip.directive';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  standalone: true,
  selector: 'form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  host: {
    class: `form-field`,
    '[class]': "appearance() + ' form-field--label-' + labelPosition()",
    '[class.touched]': 'isTouched()',
    '[class.disabled]': 'fieldDisabled()',
    '[class.error]': 'hasErrors',
    '[class.textarea]': 'field()?.elementRef?.nativeElement.tagName === "TEXTAREA"',
  },
  encapsulation: ViewEncapsulation.None,
  imports: [MatIcon, TooltipDirective, NgTemplateOutlet],
})
export class FormFieldComponent implements OnDestroy {
  #destroy$: Subject<void> = new Subject();
  #initialized: boolean = false;

  field = contentChild<FormFieldControl<any>>(FormFieldControl);

  appearance = input<'flat' | 'outlined'>('outlined');
  labelPosition = input<'top' | 'left'>('top');
  hideValidation = input<boolean>(false);
  showCounter = input<boolean>(false);

  fieldType = signal<string | null>(null);
  fieldDisabled = signal<boolean>(false);
  controlValue = signal<string | null>(null);
  isTouched = signal<boolean>(false);
  isPassword = signal<boolean>(false);
  validationErrors = signal<ValidationErrors | null>(null);

  messages = computed<{ key: string; value: any }[] | null>(() => {
    const { touched, validation } = {
      touched: this.isTouched(),
      validation: this.validationErrors(),
    };
    if (!touched || !validation) return null;

    const required = Object(validation).hasOwnProperty('required');
    if (required) return [{ key: 'required', value: true }];

    return Object.entries(validation).map(([key, value]) => {
      return { key, value };
    });
  });

  constructor() {
    effect(() => {
      console.log(this.messages())
    })

    effect(() => {
      const field = this.field();
      if (!field || this.#initialized) return;

      this.fieldType.set(field.elementRef.nativeElement.type);
      this.isPassword.set(field.elementRef.nativeElement.type === 'password');

      const control = field.ngControl?.control;
      if (!control || this.hideValidation()) return;

      this.fieldDisabled.set(control.disabled)

      control.events.pipe(takeUntil(this.#destroy$)).subscribe((event) => {
        if (event instanceof TouchedChangeEvent) this.isTouched.set(event.touched);
        this.controlValue.set(control.value);
        this.validationErrors.set(control.errors);
      });

      this.#initialized = true;
    });
  }

  get hasErrors(): boolean {
    return !!this.validationErrors();
  }

  togglePasswordVisibility() {
    const element = this.field();
    if (!element) return;

    const elementRef = element.elementRef.nativeElement;
    const type = elementRef.getAttribute('type') === 'password' ? 'text' : 'password';
    this.fieldType.set(type);
    elementRef.setAttribute('type', type);
  }

  ngOnDestroy() {
    this.#destroy$.next();
    this.#destroy$.complete();
  }
}
