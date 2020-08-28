import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormFieldTextModule } from '@jva/form-field/text';

import { JVAFormFieldRenderer } from './form-field-renderer.component';

@NgModule({
  imports: [CommonModule, FormFieldTextModule],
  declarations: [JVAFormFieldRenderer],
  exports: [JVAFormFieldRenderer]
})
export class FormFieldRendererModule {}
