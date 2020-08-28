import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'jva-editable-form-field-slot',
    template: `
        <div>
            <input type="text" name="name"/>
            <input type="text" name="tooltip" />
            <input type="text" name="label" />
            <!-- <dropdown name="formFieldType"></dropdown> -->
            <!-- <toggle name="required"> -->
            <!-- <toggle> -->
        </div>
    `,
    styles: [`
        div{
            background-color:red;
            height:60px;
            margin-bottom: 15px;
        }
    `]
})
export class JVAEditableFormFieldSlotComponent implements OnInit{
    @Input() configuration:any;

    ngOnInit(){

    }
}
