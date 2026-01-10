import { SignalGateway } from "../signal/signal.gateway";
import { OnlineGameViewModel } from "./models/online-game.view.model";

export class OnlineGameView {
    constructor(public readonly viewModel: SignalGateway<OnlineGameViewModel>) {
        this.viewModel.set({
            title: "Undercover",
        });
    }

    update(partial: Partial<OnlineGameViewModel>) {
        this.viewModel.update((current) => ({
            ...current,
            ...partial
        }));
    }
}
