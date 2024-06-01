export interface IFetchError<T extends object> {
    message: {
        message: string,
        error?: {
            code?: number
            keyValue?: string,
            errors?: {
                [P in keyof T]: string
            }
        }
    }
}

