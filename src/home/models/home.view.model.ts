export type HomeViewModel = {
    title: string;
    gameRules: string[];
    playButtonText: string;
    numberOfPlayersLabel: string;
    numberOfPlayers: number;
    canAddPlayer: boolean;
    canRemovePlayer: boolean;

    isLoadingOnlineGame: boolean;
    isErrorOnlineGame: boolean;
    onlineGameErrorMessage: string;
}