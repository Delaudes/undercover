import { SignalWrapper } from "../signal/signal.wrapper";
import { HomeViewModel } from "./models/home.view.model";


export class HomeView {
    constructor(public readonly viewModel: SignalWrapper<HomeViewModel>) {
        this.viewModel.set({
            title: "Undercover",
            gameRules: [
                "La majorité des joueurs reçoit un mot secret (ex: Chat). Les Undercovers reçoivent un mot similaire mais différent (ex: Tigre).",
                "Objectif Civils : Identifier et éliminer tous les Undercovers. Objectif Undercovers : Rester cachés jusqu'à la fin.",
                "Chaque tour, tous les joueurs décrivent leur mot avec UN SEUL autre mot, sans répéter ce qui a déjà été dit.",
                "Après que tous aient parlé, discutez puis votez pour éliminer le joueur le plus suspect. Le joueur éliminé révèle son rôle.",
                "Le jeu continue jusqu'à ce que tous les Undercovers soient éliminés (victoire des Civils) ou qu'il reste autant d'Undercovers que de Civils (victoire des Undercovers).",
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