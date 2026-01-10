import { InjectionToken } from "@angular/core";
import { ROUTER_TOKEN } from "../router/router.provider";
import { AngularSignalAdapter } from "../signal/angular-signal.adapter";
import { InMemoryOnlineGameAdapter } from "./adapters/in-memory.online-game.adapter";
import { OnlineGameViewModel } from "./models/online-game.view.model";
import { IOnlineGameController, OnlineGameController } from "./online-game.controller";
import { OnlineGameGateway } from "./online-game.gateway";
import { OnlineGamePresenter } from "./online-game.presenter";
import { OnlineGameService } from "./online-game.service";
import { OnlineGameView } from "./online-game.view";

export const ONLINE_GAME_CONTROLLER_TOKEN = new InjectionToken<IOnlineGameController>('ONLINE_GAME_CONTROLLER_TOKEN');
export const ONLINE_GAME_GATEWAY_TOKEN = new InjectionToken<OnlineGameGateway>('ONLINE_GAME_GATEWAY_TOKEN', {
    providedIn: 'root',
    factory: () => {
        return new InMemoryOnlineGameAdapter();
    }
});

export const ONLINE_GAME_PROVIDER = [
    {
        provide: ONLINE_GAME_CONTROLLER_TOKEN,
        useClass: OnlineGameController,
        deps: [OnlineGameService, ROUTER_TOKEN]
    },
    {
        provide: OnlineGameService,
        deps: [OnlineGamePresenter, ONLINE_GAME_GATEWAY_TOKEN]
    },
    {
        provide: OnlineGamePresenter,
        deps: [OnlineGameView]
    },
    {
        provide: OnlineGameView,
        useFactory: () => new OnlineGameView(new AngularSignalAdapter<OnlineGameViewModel>())
    }
];
