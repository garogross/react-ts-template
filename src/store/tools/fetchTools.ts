import {getLSItem} from "../../utils/functions/localStorage";
import {lsProps} from "../../utils/lsProps";
import {AppDispatch} from "../store";
import {IFetchError} from "../../models/Errors/IFetchError";
import {FormError} from "../../models/Errors/FormError";

enum FetchMethods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
}

export const baseUrl = 'https://jsonplaceholder.typicode.com';
export const proxy = "http://localhost:5000"


export const authConfig = (isFormData?: boolean) => {
    const token = getLSItem<string>(lsProps.token, true);
    const headers: HeadersInit = {
        'Authorization': token ? `Bearer ${token}` : "",
    }

    if (!isFormData) {
        headers['Content-Type'] = 'application/json'
    }
    return {headers}
}


// todos
export const getTodosUrl = '/todos'


export const fetchRequest = async <Res,Body extends object = {}>(
    fetchUrl: string,
    method:FetchMethods = FetchMethods.GET,
    body:Body | null = null,
    config = authConfig()
) => {

    const filteredBody:Partial<Body> = {}

    if (body) {
        for (let key in body) {
            if (body[key]) {
                filteredBody[key] = body[key]
            }
        }
    }

    const response = await fetch(`${baseUrl}${fetchUrl}`, {
        method: method,
        body: body && JSON.stringify(filteredBody),
        ...config
    });
    const resData:Res = await response.json();

    if (!response.ok) {
        // eslint-disable-next-line no-throw-literal
        throw {message: resData, status: response.status};
    }
    return resData
}

// export const setError = (text) => {
//     throw {
//         message: {
//             message: text
//         }
//     }
// }

export const setFormError = <T extends object>(error: IFetchError<T>) => {
    let payload: FormError<T> = error
    if (
        error?.message?.message?.startsWith('E11000') &&
        error?.message?.error?.keyValue
    ) {
        payload = error?.message?.error?.keyValue
    } else if (
        error?.message?.error?.code === 11000 &&
        error?.message?.error?.keyValue
    ) {
        payload = error?.message?.error.keyValue
    } else if (error?.message?.error?.errors) {
        payload = error?.message?.error?.errors
    }
    return payload
}