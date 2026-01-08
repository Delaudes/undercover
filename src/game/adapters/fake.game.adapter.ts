import { GameGateway } from "../game.gateway";
import { PlayersListDomainModel } from "../models/game.domain.model";

export class FakeGameAdapter implements GameGateway {
    getPlayersList(numberOfPlayers: number): PlayersListDomainModel {
        const players = [
            { isUndercover: true, word: "Civil" },
            ...Array(numberOfPlayers - 1).fill({ isUndercover: false, word: "Undercover" })
        ];
        return new PlayersListDomainModel(players, "Starter instructions");
    }
}
