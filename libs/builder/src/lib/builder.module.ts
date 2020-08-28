import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JVABuilderComponent } from './builder.component';
import { MatButtonModule } from '@angular/material/button';
import { JVAEditableFormFieldSlotComponent } from './editable-form-field-slot.component';
@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [JVABuilderComponent, JVAEditableFormFieldSlotComponent],
  exports:[JVABuilderComponent]
})
export class BuilderModule {}
