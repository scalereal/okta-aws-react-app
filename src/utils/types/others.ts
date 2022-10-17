export type StringOrNumber = string | number;
export type ParamVal = string | number | boolean;

export interface StringMap {
    [key: string]: string;
}

export interface ObjectMap {
    [key: string]: any;
}

export interface ParamType {
    [key: string]: ParamVal;
}
