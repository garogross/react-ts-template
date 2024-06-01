export function getLSItem(key: string): string | null;
export function getLSItem<T>(key: string,isParse: true): T | null;
export function getLSItem <T>(key: string,isParse?: boolean): T | string | null {
    const result = localStorage.getItem(key)
    if(isParse) {
        return result ? JSON.parse(result) as T : null
    } else {
        return result;
    }
}


export const setLSItem = <T>(key: string,data: T ) => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const removeLSItem = (key: string) => localStorage.removeItem(key)