import { Component, ComponentFactoryResolver, OnInit, Input, ComponentFactory, ViewContainerRef } from "@angular/core";
import {FormFieldType, FormFieldConfiguration, BaseFormField} from '@jva/form-field/shared';
import { JVATextFormFieldComponent } from '@jva/form-field/text';
import { FormGroup } from '@angular/forms';
@Component({
    selector:'jva-implicit-form-field-renderer',
    template:`
    `,
    styles:[`
    `]
})
export class JVAImplicitFormFieldRenderer implements OnInit {
    @Input() configuration: FormFieldConfiguration<any>;
    @Input() formGroup: FormGroup;

    private formFields = {
        [FormFieldType.TEXT]: JVATextFormFieldComponent,
        [FormFieldType.ADDRESS]: JVATextFormFieldComponent
    }
    
    constructor(private _cfr:ComponentFactoryResolver, private _viewContainerRef:ViewContainerRef){}

    ngOnInit(){
        const factory: ComponentFactory<BaseFormField<any>> = this._cfr.resolveComponentFactory(this.formFields[this.configuration.type]);
        const componentRef = this._viewContainerRef.createComponent(factory);
        componentRef.instance.configuration = this.configuration;
        componentRef.instance.formGroup = this.formGroup;
        componentRef.instance.ngOnChanges({});
    }
}