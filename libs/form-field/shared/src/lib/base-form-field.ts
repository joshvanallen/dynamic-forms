import { Input, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormFieldConfiguration } from './form-field-configuration';

export interface BaseFormField<V> extends OnChanges {
    formGroup: FormGroup;
    configuration: FormFieldConfiguration<V>;
}