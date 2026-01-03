export class WordsDomainModel {
    constructor(readonly secretWord: string, readonly undercoverWord: string) { }
}

export class PlayersListDomainModel {
    constructor(readonly players: PlayerDomainModel[], readonly starterInstructions: string) { }
}

export class PlayerDomainModel {
    constructor(
        readonly isUndercover: boolean,
        readonly word: string
    ) { }
}

export const WordsCollectionDomainModel = [
    new WordsDomainModel("Mouche", "Araignée"),
    new WordsDomainModel("Café", "Cacao"),
    new WordsDomainModel("Requin", "Crocodile"),
    new WordsDomainModel("Girafe", "Chameau"),
    new WordsDomainModel("Fraise", "Tomate"),
    new WordsDomainModel("Basket", "Handball"),
    new WordsDomainModel("Lac", "Océan"),
    new WordsDomainModel("Renard", "Corbeau"),
    new WordsDomainModel("Avion", "Bateau"),
    new WordsDomainModel("Rose", "Cactus"),
    new WordsDomainModel("Fromage", "Yaourt"),
    new WordsDomainModel("Montagne", "Grotte"),
    new WordsDomainModel("Livre", "Film"),
    new WordsDomainModel("Vélo", "Skateboard"),
    new WordsDomainModel("Soleil", "Feu"),
    new WordsDomainModel("Pantalon", "Robe"),
    new WordsDomainModel("Guitare", "Piano"),
    new WordsDomainModel("Tigre", "Serpent"),
    new WordsDomainModel("Orange", "Carotte"),
    new WordsDomainModel("Tennis", "Golf"),
    new WordsDomainModel("Mer", "Désert"),
    new WordsDomainModel("Lapin", "Grenouille"),
    new WordsDomainModel("Train", "Métro"),
    new WordsDomainModel("Tulipe", "Arbre"),
    new WordsDomainModel("Beurre", "Confiture"),
    new WordsDomainModel("Vallée", "Canyon"),
    new WordsDomainModel("Journal", "Radio"),
    new WordsDomainModel("Moto", "Quad"),
    new WordsDomainModel("Lune", "Étoile"),
    new WordsDomainModel("Chemise", "Cravate"),
    new WordsDomainModel("Piano", "Violon"),
    new WordsDomainModel("Éléphant", "Baleine"),
    new WordsDomainModel("Pomme", "Abricot"),
    new WordsDomainModel("Football", "Hockey"),
    new WordsDomainModel("Piscine", "Sauna"),
    new WordsDomainModel("Souris", "Chauve-souris"),
    new WordsDomainModel("Bateau", "Montgolfière"),
    new WordsDomainModel("Orchidée", "Bambou"),
    new WordsDomainModel("Lait", "Jus"),
    new WordsDomainModel("Forêt", "Savane"),
    new WordsDomainModel("Roman", "Théâtre"),
    new WordsDomainModel("Voiture", "Hélicoptère"),
    new WordsDomainModel("Arc-en-ciel", "Brouillard"),
    new WordsDomainModel("Veste", "Poncho"),
    new WordsDomainModel("Flûte", "Harmonica"),
    new WordsDomainModel("Guépard", "Kangourou"),
    new WordsDomainModel("Raisin", "Datte"),
    new WordsDomainModel("Ski", "Surf"),
    new WordsDomainModel("Cascade", "Geyser"),
    new WordsDomainModel("Chat", "Perroquet"),
]

export const StarterInstructionsCollectionDomainModel = [
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
