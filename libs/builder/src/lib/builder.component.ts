import { Component } from '@angular/core';

@Component({
  selector: 'jva-form-builder',
  template: `
    <div>
      <button type="button" mat-fab color="primary" (click)="addFormFieldSlot()">
        Add
      </button>
      <ng-container *ngFor="let slot of slots">
        <jva-editable-form-field-slot></jva-editable-form-field-slot>
      </ng-container>
    </div>
  `,
  styles: [``],
})
export class JVABuilderComponent {
  slots: any = [];
  addFormFieldSlot() {
    this.slots.push({});
  }
}
