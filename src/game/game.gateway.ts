import { PlayersListDomainModel } from "./models/game.domain.model";

export interface GameGateway {
    getPlayersList(numberOfPlayers: number): PlayersListDomainModel
}