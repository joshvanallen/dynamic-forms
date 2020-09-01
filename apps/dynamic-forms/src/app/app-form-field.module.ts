import { NgModule } from '@angular/core';
import { FormFieldRendererModule } from '@jva/form-field/renderer';
import { FormFieldTextModule } from '@jva/form-field/text';
import { FormFieldSelectModule } from '@jva/form-field/select';

const modules = [
    FormFieldRendererModule,
    FormFieldTextModule,
    FormFieldSelectModule
]


@NgModule({
    imports:modules,
    exports:modules
})
export class AppFormFieldModule{}