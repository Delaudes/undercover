import { StorageWrapper } from "./storage.wrapper";

export class LocalStorageWrapper implements StorageWrapper {
    setItem<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    };

    getItem<T>(key: string): T | undefined {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) as T : undefined;
    }
}