import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { JVATextFormFieldComponent } from './text.component';
import { JVA_FORM_FIELD, FormFieldType } from '@jva/form-field/shared';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [JVATextFormFieldComponent],
  exports: [JVATextFormFieldComponent],
  providers: [
    {
      provide: JVA_FORM_FIELD,
      useFactory: () => ({
        type: FormFieldType.TEXT,
        component: JVATextFormFieldComponent,
      }),
      multi: true,
    },
  ],
})
export class FormFieldTextModule {}
