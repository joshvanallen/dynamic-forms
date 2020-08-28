

This is the base model for the inputs
{
    inputType: enum;
    required: boolean;
    class: string[];
    disable: boolean;
    id: string;
    label: string;
    tooltip:string;
    errorMessages:{
        [validatorType]:message
    }
}

Starting with:
input[type="text]
address field
Nested forms

TODOS:
Update Input-Controls to FormFields

## Live Stream dates
8/27/2020

