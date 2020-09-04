import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators, ValidatorFn } from '@angular/forms';

import { TextFormFieldConfiguration, BaseFormControl } from '@jva/form-field/shared';

@Component({
  selector: 'jva-text-form-field',
  template: `
    <mat-form-field appearance="fill" *ngIf="show">
      <mat-label>{{ label }}</mat-label>
      <input matInput type="text" [formControl]="formControl" [pattern]="pattern" />
      <button
        mat-button
        *ngIf="formControl.value && !disable"
        matSuffix
        mat-icon-button
        aria-label="Clear"
        (click)="clearValue()"
      >
        <mat-icon>close</mat-icon>
      </button>
      <mat-hint>{{this.tooltip}}</mat-hint>
      <mat-error *ngIf="formControl.invalid">
        {{getErrorMessage()}}
      </mat-error>
    </mat-form-field>

    <p *ngIf="!show">this field is hidden</p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JVATextFormFieldComponent extends BaseFormControl<TextFormFieldConfiguration> {
  label: string;
  required: boolean = false;
  disable: boolean = false;
  show: boolean = false;
  formControl: FormControl = new FormControl();
  pattern: RegExp = null;
  tooltip: string = null;

  ngOnInit() {
    this._inputCheck();
    this.formControl.setValue(this.configuration.value);
    this.formGroup.addControl(this.configuration.id, this.formControl);
  }

  clearValue() {
    this.formControl.setValue('');
  }

  setupField() {
    const validators: ValidatorFn[] = [];
    this._inputCheck();
    this.label = this.configuration.label;
    this.required = this.configuration.required;
    this.disable = this.configuration.disable;
    this.show = this.configuration.show;
    this.pattern = this.configuration.pattern;
    this.tooltip = this.configuration.tooltip;

    if (this.disable || !this.show) {
      this.formControl.disable();
      this.formControl.updateValueAndValidity();
    } else {
      this.formControl.enable();
      if (this.required) {
        validators.push(Validators.required);
      }
      if (this.pattern) {
        validators.push(Validators.pattern(this.pattern));
      }
      this.formControl.setValidators(validators);
      this.formControl.updateValueAndValidity();
    }
  }

  private _inputCheck() {
    if (!this.formGroup) {
      throw new Error('Developer Error: Please include a form group.');
    }

    if (!this.configuration) {
      throw new Error('Developer Error: Please include a configuration');
    }
  }
}
