

This is the base model for the inputs
```
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
```

Starting with:
input[type="text]


(Demo of app)[https://jvanallen93.github.io/dynamic-forms/]