import { Directive, ElementRef, Signal } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormField } from '@angular/forms/signals';

@Directive({ standalone: true })
export abstract class FormFieldControl<T> {
  elementRef: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  ngControl?: NgControl | null;
  signalField?: FormField<T> | null;

  value: Signal<T>;
  disabled: Signal<boolean>;
}
