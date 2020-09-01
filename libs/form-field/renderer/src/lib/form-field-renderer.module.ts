import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JVAImplicitFormFieldRenderer } from './implicit-form-field-renderer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JVAImplicitFormComponent } from './implicit-form.component';
import { JVADeclaritiveFormFieldRendererComponent } from './declaritive-form-field-renderer.component';
import { JVADeclaritiveFormComponent } from './declaritive-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [
    JVAImplicitFormFieldRenderer,
    JVADeclaritiveFormComponent,
    JVAImplicitFormComponent,
    JVADeclaritiveFormFieldRendererComponent,
  ],
  exports: [JVAImplicitFormComponent, JVADeclaritiveFormComponent],
})
export class FormFieldRendererModule {}
