export class OnlineGameDomainModel {
    constructor(public readonly idGame: string, public readonly players: OnlinePlayerDomainModel[], public readonly status: OnlineStatusDomainModel, public readonly numberOfPlayers: number) {
    }
}

export class OnlinePlayerDomainModel {
    constructor(public readonly isHost: boolean, public readonly idPlayer: string, public readonly pseudo: string, public readonly word?: string) {
    }
}

export enum OnlineStatusDomainModel {
    WaitingForPlayers = 'WaitingForPlayers',
    InProgress = 'InProgress',
}