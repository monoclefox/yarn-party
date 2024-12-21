const setLocalStorageItems = (items: Record<string, unknown>) => {
    Object.keys(items).forEach((key) => {
        localStorage.setItem(key, JSON.stringify(items[key]));
    });
}

const setLocalStorageItem = (key: string, value: string) => {
    localStorage.setItem(key, value);
}

const getLocalStorageItem = (key: string) => {
    return localStorage.getItem(key);
}

export { setLocalStorageItems, setLocalStorageItem, getLocalStorageItem };