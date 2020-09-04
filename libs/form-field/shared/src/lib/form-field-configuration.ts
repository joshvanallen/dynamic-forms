export enum FormFieldType {
  TEXT,
  ADDRESS,
  SELECT,
}

export enum ErrorType {
  REQUIRED,
  MAXLENGTH,
  MINLENGTH,
  PATTERN,
}

export interface SelectFormFieldConfiguration extends FormFieldConfiguration<string> {
  options: SelectOptionConfiguration[];
  defaultOptionLabel: string;
}

export interface SelectOptionConfiguration {
  value: string;
  label: string;
}

export interface TextFormFieldConfiguration extends FormFieldConfiguration<string> {
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
  show?: boolean;
  errorMessages: { [error: string]: string };
  value: K;
}
