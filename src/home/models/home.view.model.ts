export interface HomeViewModel {
    title: string;
    gameRules: string[];
    playButtonText: string;
    numberOfPlayersLabel: string;
    numberOfPlayers: number;
    canAddPlayer: boolean;
    canRemovePlayer: boolean;
}