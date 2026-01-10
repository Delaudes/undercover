import { OnlineGameGateway } from "../online-game.gateway";

export class FakeOnlineGameAdapter implements OnlineGameGateway {
    idGame?: string;
    numberOfPlayers?: number;
    error?: unknown

    async createOnlineGame(idGame: string, numberOfPlayers: number): Promise<void> {
        if (this.error) {
            throw this.error;
        }

        this.idGame = idGame;
        this.numberOfPlayers = numberOfPlayers;
    }
}
