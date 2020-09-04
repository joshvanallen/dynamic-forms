import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { SelectFormFieldConfiguration, SelectOptionConfiguration, BaseFormControl } from '@jva/form-field/shared';

@Component({
  selector: 'jva-select-form-field',
  template: `
    <mat-form-field appearance="fill">
      <mat-label>{{ label }}</mat-label>
      <mat-select [formControl]="formControl">
        <mat-option *ngFor="let option of options" [value]="option.value">
          {{ option.label }}
        </mat-option>
      </mat-select>
      <mat-hint>{{this.tooltip}}</mat-hint>
      <mat-error *ngIf="formControl.invalid">
        {{getErrorMessage()}}
      </mat-error>
    </mat-form-field>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JVASelectFormFieldComponent extends BaseFormControl<SelectFormFieldConfiguration> {
  public formControl: FormControl = new FormControl();
  public options: SelectOptionConfiguration[];
  public label: string;
  required: boolean = false;
  disable: boolean = false;
  show: boolean = false;
  tooltip: string = null;

  setupField() {
    const validators: ValidatorFn[] = [];
    this._inputCheck();
    this.label = this.configuration.label;
    this.required = this.configuration.required;
    this.disable = this.configuration.disable;
    this.show = this.configuration.show;
    this.tooltip = this.configuration.tooltip;
    this.options = this.configuration.defaultOptionLabel ? [].concat({
      value:null,
      label: this.configuration.defaultOptionLabel
    }, this.configuration.options) : this.configuration.options;

    if (this.disable || !this.show) {
      this.formControl.disable();
      this.formControl.updateValueAndValidity();
    } else {
      this.formControl.enable();
      if (this.required) {
        validators.push(Validators.required);
      }
      this.formControl.setValidators(validators);
      this.formControl.updateValueAndValidity();
    }
  }

  ngOnInit() {
    this._inputCheck();
    this.formControl.setValue(this.configuration.value);
    this.formGroup.addControl(this.configuration.id, this.formControl);
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
