import { SignalGateway } from "../signal/signal.gateway";
import { GameViewModel, RoleViewModel } from "./models/game.view.model";

export class GameView {
    constructor(public readonly viewModel: SignalGateway<GameViewModel>) {
        this.viewModel.set({
            title: "Undercover",
            revealWordButtonText: "Voir mon mot",
            goToNextButtonText: "Suivant",
            revealStarterInstructionsButtonText: "Qui commence ?",
            starterInstructions: "",

            isRevealWordButtonDisplayed: true,
            isWordDisplayed: false,
            isGoToNextButtonDisplayed: false,
            isRevealStarterInstructionsButtonDisplayed: false,
            isStarterInstructionsDisplayed: false,

            players: [],
            currentPlayer: {
                position: "",
                isUndercover: false,
                role: RoleViewModel.Civil,
                word: ""
            }
        });
    }

    update(partial: Partial<GameViewModel>) {
        this.viewModel.update((current) => ({
            ...current,
            ...partial
        }));
    }
}
