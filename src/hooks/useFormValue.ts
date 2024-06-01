import {ChangeEvent, useState} from "react"
import {useDispatch} from "react-redux";
import {useAppDispatch} from "./redux";
import {UnknownAction} from "@reduxjs/toolkit";

type IError<T extends object> = {[key in keyof T]: string | null}
type SetErrorType<T extends object> = (payload: IError<T>) => UnknownAction
type ErrorProp<T extends object> = keyof IError<T>


export const useFormValue = <T extends object>(initialData: T, setError:SetErrorType<T>, error: IError<T>) => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState<T>(initialData);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
        clearInputError(e.target.name as ErrorProp<T>)
    }
    const clearInputError = (inputName: ErrorProp<T>) => {
        if (
            setError &&
            error &&
            inputName in error &&
            error?.[inputName]
        ) {
            dispatch(setError({
                ...error,
                [inputName]: null
            }))
        }
    }

    const isInvalid = (name: ErrorProp<T>) => error && error?.[name]

    const onResetForm = () => {
        setFormData(initialData)
    }

    return {
        formData,
        onChange,
        onResetForm,
        setFormData,
        clearInputError,
        isInvalid
    }
}
