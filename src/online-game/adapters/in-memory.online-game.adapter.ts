import { OnlineGameGateway } from "../online-game.gateway";

export class InMemoryOnlineGameAdapter implements OnlineGameGateway {
    async createOnlineGame(idGame: string, numberOfPlayers: number): Promise<void> {
        await new Promise((resolve) => setTimeout(resolve, 2000));
    }
}
