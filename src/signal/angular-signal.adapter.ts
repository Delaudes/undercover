import { signal } from "@angular/core";
import { SignalGateway } from "./signal.gateway";

export class AngularSignalAdapter<T> implements SignalGateway<T> {
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