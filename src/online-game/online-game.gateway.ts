
export interface OnlineGameGateway {
    createOnlineGame(idGame: string, numberOfPlayers: number): Promise<void>;
}
