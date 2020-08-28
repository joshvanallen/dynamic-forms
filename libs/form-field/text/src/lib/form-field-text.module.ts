import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { JVATextFormFieldComponent } from './text.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule, FormsModule ],
  declarations: [JVATextFormFieldComponent],
  exports: [JVATextFormFieldComponent],
  entryComponents: [JVATextFormFieldComponent]
})
export class FormFieldTextModule {}
