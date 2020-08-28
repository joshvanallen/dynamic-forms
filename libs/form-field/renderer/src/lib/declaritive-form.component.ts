import { Component, Input } from "@angular/core";
import { FormFieldConfiguration } from '@jva/form-field/shared';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'jva-declaritive-form',
    template: `
        <ng-container *ngFor="let config of configurations;">
            <div class="display:flex; flex-direction:column">
                <jva-declaritive-form-field-renderer [formGroup]="formGroup" [configuration]="config"></jva-declaritive-form-field-renderer>
            </div>
        </ng-container>
    `,
    styles:[`
    `]
})
export class JVADeclaritiveFormComponent{
    @Input() configurations: FormFieldConfiguration<any>[] | undefined; 
    public formGroup = new FormGroup({});

    ngOnInit(){
        this._inputValidation();
    }

    private _inputValidation(){
        if(!this.configurations){
            throw new Error('Developer Error: please include form field configurations to render.')
        }
    }
}