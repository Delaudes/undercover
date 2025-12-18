import { SignalWrapper } from "./signal.wrapper";

export class FakeSignalWrapper<T> implements SignalWrapper<T> {
    private value = undefined as T;

    get(): T {
        return this.value;
    }

    set(value: T): void {
        this.value = value;
    }

    update(updater: (currentValue: T) => T): void {
        this.value = updater(this.value);
    }
}