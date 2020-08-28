import { Component, Input } from "@angular/core";

import { BaseFormField, FormFieldConfiguration } from '@jva/form-field/shared';
import { FormGroup } from '@angular/forms';

@Component({
    selector:'jva-number-form-field',
    template:`
    `,
    styles:[`
    `]
})
export class JVANumberFormFieldComponent {
    @Input() formGroup: FormGroup;
    @Input() configuration: FormFieldConfiguration<number>;

}