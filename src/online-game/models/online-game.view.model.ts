export type OnlineGameViewModel = {
    title: string;
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;

    joinButtonText: string;
    waitingForPlayersMessage: string;
    isWaitingForPlayers: boolean;
    players: OnlinePlayerViewModel[];
}

export type OnlinePlayerViewModel = {
    idPlayer: string;
    pseudo: string;
    isHost: boolean;
}
