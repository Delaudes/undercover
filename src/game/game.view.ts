import { SignalWrapper } from "../signal/signal.wrapper";
import { GameViewModel } from "./models/game.view.model";

export class GameView {
    constructor(public readonly viewModel: SignalWrapper<GameViewModel>) {
        this.viewModel.set({
            title: "Undercover",
            revealWordButtonText: "Voir mon mot",
            goToNextButtonText: "Suivant",
            revealStarterInstructionsButtonText: "Qui commence ?",
            starterInstructions: "Celui qui commence est celui qui a le téléphone le plus récent.",

            isRevealWordButtonDisplayed: true,
            isWordDisplayed: false,
            isGoToNextButtonDisplayed: false,
            isRevealStarterInstructionsButtonDisplayed: false,
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
