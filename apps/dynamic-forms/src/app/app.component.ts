import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  FormFieldConfiguration,
  FormFieldType,
  TextFormFieldConfiguration,
  SelectFormFieldConfiguration,
} from '@jva/form-field/shared';

@Component({
  selector: 'jva-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dynamic-forms';
  values = '';
  formGroup = new FormGroup({});
  configurations: FormFieldConfiguration<any>[] = [
    {
      id: '1234',
      disable: false,
      errorMessages: {},
      type: FormFieldType.TEXT,
      label: 'Hello1',
      required: false,
      tooltip: 'blahhh',
      value: 'World',
      show: true,
    },

    {
      id: '4567',
      disable: false,
      errorMessages: {},
      type: FormFieldType.TEXT,
      label: 'Number',
      required: true,
      tooltip: 'blahhh',
      value: '123',
      show: true,
      pattern: /[0-9]+/,
    } as TextFormFieldConfiguration,
    {
      id: '354654',
      disable: false,
      errorMessages: {},
      type: FormFieldType.SELECT,
      label: 'Select',
      required: false,
      tooltip: 'blahh',
      value: '1234',
      show: true,
      options: [
        {
          value: 'Hello',
          label: 'Hello',
        },
        {
          value: '1234',
          label: '1234',
        },
        {
          value: 'World',
          label: 'World',
        },
      ],
    } as SelectFormFieldConfiguration,
  ];
  constructor() {}

  showFormGroupValues() {
    this.values = this.formGroup.value;
  }
}
