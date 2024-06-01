import {IFetchError} from "./IFetchError";

export type FormError<T extends object> = IFetchError<T> | string | { [P in keyof T]: string }
