import { InjectionToken } from "@angular/core";
import { ROUTER_TOKEN } from "../router/router.wrapper";
import { AngularSignalWrapper } from "../signal/angular-signal.wrapper";
import { GameController, IGameController } from "./game.controller";
import { GamePresenter } from "./game.presenter";
import { GameService } from "./game.service";
import { GameView } from "./game.view";
import { GameViewModel } from "./models/game.view.model";

export const GAME_CONTROLLER_TOKEN = new InjectionToken<IGameController>('GAME_CONTROLLER');

export const GAME_PROVIDER = [
    {
        provide: GAME_CONTROLLER_TOKEN,
        useClass: GameController,
        deps: [GameService, ROUTER_TOKEN]
    },
    {
        provide: GameService,
        deps: [GamePresenter]
    },
    {
        provide: GamePresenter,
        deps: [GameView]
    },
    {
        provide: GameView,
        useFactory: () => new GameView(new AngularSignalWrapper<GameViewModel>())
    }
];
