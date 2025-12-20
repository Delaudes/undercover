export interface GameViewModel {
    title: string;
    revealWordButtonText: string;
    isRevealWordButtonDisplayed: boolean;
    isWordDisplayed: boolean;
    goToNextButtonText: string;
    isGoToNextButtonDisplayed: boolean;
    revealStarterInstructionsButtonText: string;
    isRevealStarterInstructionsButtonDisplayed: boolean;
    starterInstructions: string;
    isStarterInstructionsDisplayed: boolean;
    players: PlayerViewModel[];
    currentPlayer: PlayerViewModel;
}

export interface PlayerViewModel {
    position: string;
    isUndercover: boolean;
    word: string;
}
