import { FakeRouterAdapter } from "../../router/fake-router.adapter";
import { FakeSignalAdapter } from "../../signal/fake-signal.adapter";
import { HomeController } from "../home.controller";
import { HomePresenter } from "../home.presenter";
import { HomeService } from "../home.service";
import { HomeView } from "../home.view";
import { HomeViewModel } from "../models/home.view.model";

describe('HomeIntegration', () => {
    let homeController: HomeController;
    let homeService: HomeService
    let fakeRouterAdapter: FakeRouterAdapter
    let homePresenter: HomePresenter;
    let homeView: HomeView;

    beforeEach(() => {
        homeView = new HomeView(new FakeSignalAdapter<HomeViewModel>());
        homePresenter = new HomePresenter(homeView);
        fakeRouterAdapter = new FakeRouterAdapter();
        homeService = new HomeService(homePresenter);
        homeController = new HomeController(homeService, fakeRouterAdapter);
    });

    describe('add player', () => {
        it('should add a player', () => {
            expect(homeView.viewModel.get().numberOfPlayers).toEqual(4);

            homeController.addPlayer();

            expect(homeView.viewModel.get().numberOfPlayers).toEqual(5);
        });

        it('should not authorize adding more than 20 players', () => {
            homeView.update({ numberOfPlayers: 19 });

            expect(homeView.viewModel.get().canAddPlayer).toEqual(true);

            homeController.addPlayer();

            expect(homeView.viewModel.get().canAddPlayer).toEqual(false);
        });

        it('should authorize removing a player when adding one', () => {
            homeView.update({ numberOfPlayers: 3, canRemovePlayer: false });

            expect(homeView.viewModel.get().canRemovePlayer).toEqual(false);

            homeController.addPlayer();

            expect(homeView.viewModel.get().canRemovePlayer).toEqual(true);
        });
    });

    describe('remove player', () => {
        it('should remove a player', () => {
            expect(homeView.viewModel.get().numberOfPlayers).toEqual(4);

            homeController.removePlayer();

            expect(homeView.viewModel.get().numberOfPlayers).toEqual(3);
        });

        it('should not authorize removing less than 3 players', () => {
            homeView.update({ numberOfPlayers: 4 });

            expect(homeView.viewModel.get().canRemovePlayer).toEqual(true);

            homeController.removePlayer();

            expect(homeView.viewModel.get().canRemovePlayer).toEqual(false);
        });

        it('should authorize adding a player when removing one', () => {
            homeView.update({ numberOfPlayers: 20, canAddPlayer: false });

            expect(homeView.viewModel.get().canAddPlayer).toEqual(false);

            homeController.removePlayer();

            expect(homeView.viewModel.get().canAddPlayer).toEqual(true);
        });
    });

    describe('navigate to game', () => {
        it('should navigate to game with number of players', () => {
            const numberOfPlayers = 6;

            expect(fakeRouterAdapter.lastNavigatedPath).toBeUndefined();

            homeController.navigateToGame(numberOfPlayers);

            expect(fakeRouterAdapter.lastNavigatedPath).toEqual('game/' + numberOfPlayers);
        });
    });
});