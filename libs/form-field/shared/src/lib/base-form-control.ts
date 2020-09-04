import { Input, Component, Directive, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormFieldConfiguration } from './form-field-configuration';

@Directive({})
export abstract class BaseFormControl<C extends FormFieldConfiguration<any>> implements OnChanges {
  @Input() formGroup: FormGroup;
  @Input() configuration: C;
  
  ngOnChanges(changes: SimpleChanges) {
    this.setupField(changes);
  }

  getErrorMessage(errorKey?:string): string{
    return this.configuration.errorMessages[errorKey] ?? 'This field is invalid';
  }

  abstract setupField(changes: SimpleChanges);
}
