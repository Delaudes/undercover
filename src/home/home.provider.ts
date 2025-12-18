
import { InjectionToken } from "@angular/core";
import { ROUTER_TOKEN } from "../router/router.wrapper";
import { AngularSignalWrapper } from "../signal/angular-signal.wrapper";
import { HomeController, IHomeController } from "./home.controller";
import { HomePresenter } from "./home.presenter";
import { HomeService } from "./home.service";
import { HomeView } from "./home.view";
import { HomeViewModel } from "./models/home.view.model";

export const HOME_CONTROLLER_TOKEN = new InjectionToken<IHomeController>('HOME_CONTROLLER');

export const HOME_PROVIDER = [
    {
        provide: HOME_CONTROLLER_TOKEN,
        useClass: HomeController,
        deps: [HomeService, ROUTER_TOKEN]
    },
    {
        provide: HomeService,
        deps: [HomePresenter]
    },
    {
        provide: HomePresenter,
        deps: [HomeView]
    },
    {
        provide: HomeView,
        useFactory: () => new HomeView(new AngularSignalWrapper<HomeViewModel>())
    }
] 