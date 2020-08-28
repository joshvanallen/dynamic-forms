export enum FormFieldType {
    TEXT,
    ADDRESS,
}

export enum ErrorType {
    REQUIRED,
    MAXLENGTH,
    MINLENGTH,
    PATTERN,
}

export interface TextFormFieldConfiguration extends FormFieldConfiguration<string>{
    pattern?: RegExp;
    minlength?: number;
    maxlength?: number;
}

export interface FormFieldConfiguration<K> {
    type: FormFieldType;
    required?: boolean;
    disable?: boolean;
    id: string;
    label: string;
    tooltip?: string;
    show?:boolean;
    errorMessages: {[error: string]:string},
    value: K
}

