export class PlayersListDomainModel {
    constructor(readonly players: PlayerDomainModel[], readonly starterInstructions: string) { }
}

export class PlayerDomainModel {
    constructor(
        readonly isUndercover: boolean,
        readonly word: string
    ) { }
}

