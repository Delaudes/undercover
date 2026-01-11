import { OnlineGameDomainModel, OnlineStatusDomainModel } from "../models/online-game.domain.model";
import { OnlineGameGateway } from "../online-game.gateway";

export class FakeOnlineGameAdapter implements OnlineGameGateway {
    idGame?: string;
    numberOfPlayers?: number;
    error?: unknown
    onlineGame: OnlineGameDomainModel = {
        idGame: 'fake-game-id',
        players: [],
        status: OnlineStatusDomainModel.WaitingForPlayers,
        numberOfPlayers: 4,
    };

    async createOnlineGame(idGame: string, numberOfPlayers: number): Promise<void> {
        if (this.error) {
            throw this.error;
        }

        this.idGame = idGame;
        this.numberOfPlayers = numberOfPlayers;
    }

    async fetchOnlineGame(idGame: string): Promise<OnlineGameDomainModel> {
        if (this.error) {
            throw this.error;
        }

        return new OnlineGameDomainModel(
            idGame,
            this.onlineGame.players,
            this.onlineGame.status,
            this.onlineGame.numberOfPlayers,
        );
    }
}
