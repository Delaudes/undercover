import { Routes } from '@angular/router';
import { GameComponent } from '../game/game.component';
import { HomeComponent } from '../home/home.component';
import { OnlineGameComponent } from '../online-game/online-game.component';

export enum Path {
    Home = '',
    Game = 'game/:numberOfPlayers',
    OnlineGame = 'online-game/:idGame'
}


export const routes: Routes = [
    {
        path: Path.Home,
        component: HomeComponent
    },
    {
        path: Path.Game,
        component: GameComponent
    },
    {
        path: Path.OnlineGame,
        component: OnlineGameComponent
    },
    {
        path: '**',
        redirectTo: Path.Home
    }
];