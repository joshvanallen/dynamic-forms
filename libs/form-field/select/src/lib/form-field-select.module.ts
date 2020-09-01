import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JVASelectFormFieldComponent } from './select.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JVA_FORM_FIELD, FormFieldType } from '@jva/form-field/shared';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  declarations: [JVASelectFormFieldComponent],
  exports: [JVASelectFormFieldComponent],
  providers: [
    {
      provide: JVA_FORM_FIELD,
      useFactory: () => ({
        type: FormFieldType.SELECT,
        component: JVASelectFormFieldComponent,
      }),
      multi: true,
    },
  ],
})
export class FormFieldSelectModule {}
