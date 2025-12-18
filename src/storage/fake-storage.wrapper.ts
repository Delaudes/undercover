import { StorageWrapper } from "./storage.wrapper";

export class FakeStorageWrapper implements StorageWrapper {
    store: Record<string, unknown> = {};

    setItem<T>(key: string, value: T): void {
        this.store[key] = value;
    }

    getItem<T>(key: string): T | undefined {
        return this.store[key] as T;
    }
}