import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldConfiguration, FormFieldType, TextFormFieldConfiguration } from '@jva/form-field/shared';

@Component({
  selector: 'jva-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dynamic-forms';
  values = '';
  formGroup = new FormGroup({});
  configurations: TextFormFieldConfiguration[] = [{
    id:'1234',
    disable:false,
    errorMessages:{},
    type: FormFieldType.TEXT,
    label:'Hello',
    required:false,
    tooltip:'blahhh',
    value: 'World',
    show:true
  },

  {
    id:'4567',
    disable:false,
    errorMessages:{},
    type: FormFieldType.TEXT,
    label:'Number',
    required: true,
    tooltip:'blahhh',
    value: '123',
    show:true,
    pattern: /[0-9]+/
  }
]
  constructor(){
  }

  showFormGroupValues(){
    this.values = this.formGroup.value;
  }

}
