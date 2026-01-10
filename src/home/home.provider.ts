
import { InjectionToken } from "@angular/core";
import { ONLINE_GAME_GATEWAY_TOKEN } from "../online-game/online-game.provider";
import { ROUTER_TOKEN } from "../router/router.provider";
import { AngularSignalAdapter } from "../signal/angular-signal.adapter";
import { HomeController, IHomeController } from "./home.controller";
import { HomePresenter } from "./home.presenter";
import { HomeService } from "./home.service";
import { HomeView } from "./home.view";
import { HomeViewModel } from "./models/home.view.model";

export const HOME_CONTROLLER_TOKEN = new InjectionToken<IHomeController>('HOME_CONTROLLER_TOKEN');

export const HOME_PROVIDER = [
    {
        provide: HOME_CONTROLLER_TOKEN,
        useClass: HomeController,
        deps: [HomeService, ROUTER_TOKEN]
    },
    {
        provide: HomeService,
        deps: [HomePresenter, ONLINE_GAME_GATEWAY_TOKEN]
    },
    {
        provide: HomePresenter,
        deps: [HomeView]
    },
    {
        provide: HomeView,
        useFactory: () => new HomeView(new AngularSignalAdapter<HomeViewModel>())
    }
] 