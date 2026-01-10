import { InjectionToken } from "@angular/core";
import { ROUTER_TOKEN } from "../router/router.provider";
import { AngularSignalAdapter } from "../signal/angular-signal.adapter";
import { InMemoryGameAdapter } from "./adapters/in-memory.game.adapter";
import { GameController, IGameController } from "./game.controller";
import { GameGateway } from "./game.gateway";
import { GamePresenter } from "./game.presenter";
import { GameService } from "./game.service";
import { GameView } from "./game.view";
import { GameViewModel } from "./models/game.view.model";

export const GAME_CONTROLLER_TOKEN = new InjectionToken<IGameController>('GAME_CONTROLLER_TOKEN');
export const GAME_GATEWAY_TOKEN = new InjectionToken<GameGateway>('GAME_GATEWAY_TOKEN');

export const GAME_PROVIDER = [
    {
        provide: GAME_CONTROLLER_TOKEN,
        useClass: GameController,
        deps: [GameService, ROUTER_TOKEN]
    },
    {
        provide: GameService,
        deps: [GamePresenter, GAME_GATEWAY_TOKEN]
    },
    {
        provide: GAME_GATEWAY_TOKEN,
        useClass: InMemoryGameAdapter
    },
    {
        provide: GamePresenter,
        deps: [GameView]
    },
    {
        provide: GameView,
        useFactory: () => new GameView(new AngularSignalAdapter<GameViewModel>())
    }
];
