import { InjectionToken, Component } from '@angular/core';
import { FormFieldType } from './form-field-configuration';

export const JVA_FORM_FIELDS = new InjectionToken<JVAFormFieldTokenConfiguration[]>(
  '[JVA Form] App level defined form fields'
);
export const JVA_FORM_FIELD = new InjectionToken<JVAFormFieldTokenConfiguration>(
  '[JVA Form] module defined form field'
);
export interface JVAFormFieldTokenConfiguration {
  type: FormFieldType;
  component: Component;
}
