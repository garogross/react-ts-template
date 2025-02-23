export function formatDate(dateStr: string,reversed?: boolean) {
    const date = new Date(dateStr)
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    let result = `${day}-${month}-${year}`
    if(reversed) {
        return result.split('-').reverse().join('-')
    } else {
        const hours = date.getHours()
        const min = date.getMinutes()
        const sec = date.getSeconds()

        return `${result} ${hours}:${min}:${sec}`;

    }
}

