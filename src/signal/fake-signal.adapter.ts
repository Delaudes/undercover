import { SignalGateway } from "./signal.gateway";

export class FakeSignalAdapter<T> implements SignalGateway<T> {
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