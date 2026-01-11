import { OnlineGameDomainModel, OnlineStatusDomainModel } from "../models/online-game.domain.model";
import { OnlineGameGateway } from "../online-game.gateway";

export class InMemoryOnlineGameAdapter implements OnlineGameGateway {
    async createOnlineGame(idGame: string, numberOfPlayers: number): Promise<void> {
        await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    async fetchOnlineGame(idGame: string): Promise<OnlineGameDomainModel> {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return {
            idGame,
            players: [],
            status: OnlineStatusDomainModel.WaitingForPlayers,
            numberOfPlayers: 4,
        };
    }
}
