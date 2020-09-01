import { ComponentFactoryResolver, OnInit, Input, ComponentFactory, ViewContainerRef, Directive } from "@angular/core";
import { FormFieldConfiguration, BaseFormControl} from '@jva/form-field/shared';
import { FormGroup } from '@angular/forms';
import { FormFieldService } from './form-field.service';

@Directive({
    selector:'[jvaImplicityFormFieldRender]',
})
export class JVAImplicitFormFieldRenderer implements OnInit {
    @Input() configuration: FormFieldConfiguration<any>;
    @Input() formGroup: FormGroup;
    
    constructor(private _cfr:ComponentFactoryResolver, private _viewContainerRef:ViewContainerRef, private formFieldService: FormFieldService){}

    ngOnInit(){
        const component = this.formFieldService.getField(this.configuration.type);
        const factory: ComponentFactory<BaseFormControl<any>> = this._cfr.resolveComponentFactory(component);
        const componentRef = this._viewContainerRef.createComponent(factory);
        componentRef.instance.configuration = this.configuration;
        componentRef.instance.formGroup = this.formGroup;
        componentRef.instance.ngOnChanges({});
    }
}