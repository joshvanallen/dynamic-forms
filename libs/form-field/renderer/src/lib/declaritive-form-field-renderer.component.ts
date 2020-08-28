import { Component, Input } from "@angular/core";
import { FormGroup } from '@angular/forms';
import { FormFieldConfiguration, FormFieldType } from '@jva/form-field/shared';

@Component({
    selector: 'jva-declaritive-form-field-renderer',
    template: `
        <ng-container [ngSwitch]="configuration.type">
            <ng-container *ngSwitchCase="fieldTypes.TEXT">
                <jva-text-form-field [formGroup]="formGroup" [configuration]="configuration"></jva-text-form-field>
            <ng-container>
        </ng-container>
    `,
    styles:[`
    `]
})
export class JVADeclaritiveFormFieldRendererComponent{
    @Input() formGroup: FormGroup;
    @Input() configuration: FormFieldConfiguration<any>;
    public fieldTypes = FormFieldType;
}