import { Injectable, Inject, Optional, Component } from '@angular/core';
import { JVA_FORM_FIELD, FormFieldType, JVAFormFieldTokenConfiguration } from '@jva/form-field/shared';

@Injectable({
  providedIn: 'root',
})
export class FormFieldService {
  private _fields: any = {};

  constructor(
    @Optional()
    @Inject(JVA_FORM_FIELD)
    private _formFields?: JVAFormFieldTokenConfiguration[]
  ) {
    if (_formFields?.length > 0) {
      for (let i = 0; i < _formFields.length; i++) {
        this._fields[_formFields[i].type] = _formFields[i].component;
      }
    }
  }

  getField(type: FormFieldType): any {
    return this._fields[type];
  }
}
