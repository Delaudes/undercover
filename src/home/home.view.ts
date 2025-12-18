import { SignalWrapper } from "../signal/signal.wrapper";
import { HomeViewModel } from "./models/home.view.model";


export class HomeView {
    constructor(public readonly viewModel: SignalWrapper<HomeViewModel>) {
        this.viewModel.set({
            title: "Undercover",
            gameRules: [
                "Chaque joueur reçoit le même mot secret.",
                "Certains joueurs sont des 'Undercovers' avec un mot différent.",
                "Les joueurs disent tour à tour un mot lié à leur mot secret.",
                "Après chaque tour, les joueurs votent pour éliminer un suspect.",
                "Le jeu continue jusqu'à ce que tous les Undercovers soient éliminés.",
                "Si un Undercover reste à la fin, il gagne la partie.",
            ],
            playButtonText: "Jouer",
            numberOfPlayersLabel: "Nombre de joueurs",
            numberOfPlayers: 4,
            canAddPlayer: true,
            canRemovePlayer: true,
        })
    }

    update(partial: Partial<HomeViewModel>) {
        this.viewModel.update((current) => ({
            ...current,
            ...partial
        }));
    }
}