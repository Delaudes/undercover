export interface GameViewModel {
    title: string;
    revealWordButtonText: string;
    goToNextButtonText: string;
    revealStarterInstructionsButtonText: string;
    starterInstructions: string;

    isRevealWordButtonDisplayed: boolean;
    isWordDisplayed: boolean;
    isGoToNextButtonDisplayed: boolean;
    isRevealStarterInstructionsButtonDisplayed: boolean;
    isStarterInstructionsDisplayed: boolean;

    players: PlayerViewModel[];
    currentPlayer: PlayerViewModel;
}

export interface PlayerViewModel {
    position: string;
    isUndercover: boolean;
    role: RoleViewModel;
    word: string;
}

export enum RoleViewModel {
    Undercover = "Undercover",
    Civil = "Civil"
}
