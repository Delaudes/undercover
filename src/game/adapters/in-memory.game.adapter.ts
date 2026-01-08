import { GameGateway } from "../game.gateway";
import { PlayerDomainModel, PlayersListDomainModel } from "../models/game.domain.model";

export const WordsCollection: Record<string, string> = {
    "Mouche": "Araignée",
    "Café": "Cacao",
    "Requin": "Crocodile",
    "Girafe": "Chameau",
    "Fraise": "Tomate",
    "Basket": "Handball",
    "Lac": "Océan",
    "Renard": "Corbeau",
    "Avion": "Bateau",
    "Rose": "Cactus",
    "Fromage": "Yaourt",
    "Montagne": "Grotte",
    "Livre": "Film",
    "Vélo": "Skateboard",
    "Soleil": "Feu",
    "Pantalon": "Robe",
    "Guitare": "Piano",
    "Tigre": "Serpent",
    "Orange": "Carotte",
    "Tennis": "Golf",
    "Mer": "Désert",
    "Lapin": "Grenouille",
    "Train": "Métro",
    "Tulipe": "Arbre",
    "Beurre": "Confiture",
    "Vallée": "Canyon",
    "Journal": "Radio",
    "Moto": "Quad",
    "Lune": "Étoile",
    "Chemise": "Cravate",
    "Piano": "Violon",
    "Éléphant": "Baleine",
    "Pomme": "Abricot",
    "Football": "Hockey",
    "Piscine": "Sauna",
    "Souris": "Chauve-souris",
    "Bateau": "Montgolfière",
    "Orchidée": "Bambou",
    "Lait": "Jus",
    "Forêt": "Savane",
    "Roman": "Théâtre",
    "Voiture": "Hélicoptère",
    "Arc-en-ciel": "Brouillard",
    "Veste": "Poncho",
    "Flûte": "Harmonica",
    "Guépard": "Kangourou",
    "Raisin": "Datte",
    "Ski": "Surf",
    "Cascade": "Geyser",
    "Chat": "Perroquet",
}

export const StarterInstructionsCollection = [
    "Celui qui commence est celui qui a le téléphone le plus récent.",
    "Celui qui commence est celui qui a fêté son anniversaire le plus récemment.",
    "Celui qui commence est celui qui habite le plus près d'ici.",
    "Celui qui commence est celui qui a les yeux de la couleur la plus claire.",
    "Celui qui commence est celui qui a lu le dernier un livre.",
    "Celui qui commence est celui qui a le plus de frères et sœurs.",
    "Celui qui commence est celui qui a le prénom le plus court.",
    "Celui qui commence est celui qui a voyagé le plus loin.",
    "Celui qui commence est celui qui a le plus de chaussures.",
    "Celui qui commence est celui qui a le plus d'animaux de compagnie.",
]


export class InMemoryGameAdapter implements GameGateway {
    getPlayersList(numberOfPlayers: number): PlayersListDomainModel {
        numberOfPlayers = numberOfPlayers < 3 ? 3 : numberOfPlayers;
        numberOfPlayers = numberOfPlayers > 20 ? 20 : numberOfPlayers;
        const words = this.pickWords();
        const starterInstructions = this.pickStarterInstructions();
        const numberOfUndercovers = Math.floor(numberOfPlayers / 3);
        const undercovers = Array.from({ length: numberOfUndercovers }, () => new PlayerDomainModel(true, words.undercoverWord));
        const civilians = Array.from({ length: numberOfPlayers - numberOfUndercovers }, () => new PlayerDomainModel(false, words.secretWord));
        const playersList = new PlayersListDomainModel([...undercovers, ...civilians].sort(() => Math.random() - 0.5), starterInstructions);
        return playersList;
    }

    private pickWords(): { secretWord: string; undercoverWord: string } {
        const keys = Object.keys(WordsCollection);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        return {
            secretWord: randomKey,
            undercoverWord: WordsCollection[randomKey]
        };
    }

    private pickStarterInstructions(): string {
        const randomIndex = Math.floor(Math.random() * StarterInstructionsCollection.length);
        return StarterInstructionsCollection[randomIndex];
    }
}