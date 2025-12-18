import { signal } from "@angular/core";
import { SignalWrapper } from "./signal.wrapper";

export class AngularSignalWrapper<T> implements SignalWrapper<T> {
    private _signal = signal<T>(undefined as T)

    get(): T {
        return this._signal();
    }

    set(value: T): void {
        this._signal.set(value);
    }

    update(updater: (currentValue: T) => T): void {
        this._signal.update(updater);
    }
}