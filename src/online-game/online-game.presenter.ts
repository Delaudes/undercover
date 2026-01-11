import { OnlineGameDomainModel, OnlineStatusDomainModel } from "./models/online-game.domain.model";
import { OnlineGameView } from "./online-game.view";

export class OnlineGamePresenter {
    constructor(private onlineGameView: OnlineGameView) { }

    stopLoading(): void {
        this.onlineGameView.update({ isLoading: false });
    }

    presentError(): void {
        this.onlineGameView.update({
            isError: true,
            errorMessage: 'Une erreur est survenue lors du chargement du jeu en ligne.'
        });
    }

    presentOnlineGame(onlineGame: OnlineGameDomainModel): void {
        this.onlineGameView.update({
            isError: false,
            isWaitingForPlayers: onlineGame.status === OnlineStatusDomainModel.WaitingForPlayers,
            players: onlineGame.players.map(player => ({
                idPlayer: player.idPlayer,
                pseudo: player.pseudo,
                isHost: player.isHost
            }))
        })
    }
}
