export const storageSave = (key, value) => {

    if (!key) {
        throw new Error("storageSave: No storage key provided.")
    }

    localStorage.setItem(key, JSON.stringify(value))
}



export const storageRead = key => {
    const data = localStorage.getItem(key)
    if(data){
        return JSON.parse(data)
    }
    return null
}