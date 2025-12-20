import { SignalWrapper } from "../signal/signal.wrapper";
import { GameViewModel } from "./models/game.view.model";

export class GameView {
    constructor(public readonly viewModel: SignalWrapper<GameViewModel>) {
        this.viewModel.set({
            title: "Undercover",
            revealWordButtonText: "Voir mon mot",
            isRevealWordButtonDisplayed: true,
            isWordDisplayed: false,
            goToNextButtonText: "Suivant",
            isGoToNextButtonDisplayed: false,
            revealStarterInstructionsButtonText: "Qui commence ?",
            isRevealStarterInstructionsButtonDisplayed: false,
            starterInstructions: "Celui qui commence est celui qui a le téléphone le plus récent.",
            isStarterInstructionsDisplayed: false,
            players: [{
                position: "1/3",
                isUndercover: false,
                word: "Undercover"
            }, {
                position: "2/3",
                isUndercover: false,
                word: "Undercover"
            }, {
                position: "3/3",
                isUndercover: true,
                word: "Civil"
            }],
            currentPlayer: {
                position: "1/3",
                isUndercover: false,
                word: "Undercover"
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
