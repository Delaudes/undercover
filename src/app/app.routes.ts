import { Routes } from '@angular/router';
import { GameComponent } from '../game/game.component';
import { HomeComponent } from '../home/home.component';

export enum Path {
    Home = '',
    Game = 'game',
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
        path: '**',
        redirectTo: Path.Home
    }
];