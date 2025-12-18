import { InjectionToken } from "@angular/core";

export interface StorageWrapper {
    setItem<T>(key: string, value: T): void;
    getItem<T>(key: string): T | undefined;
}

export const STORAGE_TOKEN = new InjectionToken<StorageWrapper>('STORAGE');