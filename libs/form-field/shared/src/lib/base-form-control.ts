import { Input, Component, Directive, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldConfiguration } from './form-field-configuration';

@Directive({})
export abstract class BaseFormControl<C extends FormFieldConfiguration<any>> implements OnChanges{
    @Input() formGroup: FormGroup;
    @Input() configuration: C;

    ngOnChanges(changes: SimpleChanges){
        this.setupField(changes);
    }

    abstract setupField(changes: SimpleChanges);
}