import { FakeRouterAdapter } from "../../router/fake-router.adapter";
import { FakeSignalAdapter } from "../../signal/fake-signal.adapter";
import { FakeGameAdapter } from "../adapters/fake.game.adapter";
import { GameController } from "../game.controller";
import { GamePresenter } from "../game.presenter";
import { GameService } from "../game.service";
import { GameView } from "../game.view";
import { GameViewModel } from "../models/game.view.model";

describe('GameIntegration', () => {
    let gameController: GameController;
    let gameService: GameService;
    let fakeRouterAdapter: FakeRouterAdapter;
    let gamePresenter: GamePresenter;
    let gameGateway: FakeGameAdapter
    let gameView: GameView;

    beforeEach(() => {
        gameView = new GameView(new FakeSignalAdapter<GameViewModel>());
        gameGateway = new FakeGameAdapter();
        gamePresenter = new GamePresenter(gameView);
        fakeRouterAdapter = new FakeRouterAdapter();
        gameService = new GameService(gamePresenter, gameGateway);
        gameController = new GameController(gameService, fakeRouterAdapter);
    });

    describe('init game', () => {
        it('should init the game', () => {
            const expectedPlayers = [
                { position: "1/4", isUndercover: true, role: "Undercover", word: "Civil" },
                { position: "2/4", isUndercover: false, role: "Civil", word: "Undercover" },
                { position: "3/4", isUndercover: false, role: "Civil", word: "Undercover" },
                { position: "4/4", isUndercover: false, role: "Civil", word: "Undercover" }
            ]

            expect(gameView.viewModel.get().players).toEqual(expectedPlayers);
            expect(gameView.viewModel.get().currentPlayer).toEqual(expectedPlayers[0]);
            expect(gameView.viewModel.get().starterInstructions).toEqual("Starter instructions");
            expect(gameView.viewModel.get().isRevealWordButtonDisplayed).toEqual(true);
            expect(gameView.viewModel.get().isWordDisplayed).toEqual(false);
            expect(gameView.viewModel.get().isGoToNextButtonDisplayed).toEqual(false);
            expect(gameView.viewModel.get().isRevealStarterInstructionsButtonDisplayed).toEqual(false);
            expect(gameView.viewModel.get().isStarterInstructionsDisplayed).toEqual(false);
        });

        it('should init the game with default number of players', () => {
            expect(gameView.viewModel.get().players.length).toEqual(4);
        });

        it('should init the game with number of players from route param', () => {
            const numberOfPlayers = 6
            fakeRouterAdapter.params['numberOfPlayers'] = numberOfPlayers.toString();

            gameController.initGame();

            expect(gameView.viewModel.get().players.length).toEqual(numberOfPlayers);
        });
    });

    describe('reveal word', () => {
        it('should present word to players except the last one', () => {
            gameView.viewModel.get().players.slice(0, -1).forEach((player) => {
                gameView.update({
                    currentPlayer: player,
                    isWordDisplayed: false,
                    isRevealWordButtonDisplayed: true,
                    isGoToNextButtonDisplayed: false
                })

                gameController.revealWord();

                expect(gameView.viewModel.get().isWordDisplayed).toEqual(true);
                expect(gameView.viewModel.get().isRevealWordButtonDisplayed).toEqual(false);
                expect(gameView.viewModel.get().isGoToNextButtonDisplayed).toEqual(true);
            })
        })

        it('should present word to the last player', () => {
            const lastPlayer = gameView.viewModel.get().players[gameView.viewModel.get().players.length - 1];
            gameView.update({
                currentPlayer: lastPlayer,
                isWordDisplayed: false,
                isRevealWordButtonDisplayed: true,
                isRevealStarterInstructionsButtonDisplayed: false
            })

            gameController.revealWord();

            expect(gameView.viewModel.get().isWordDisplayed).toEqual(true);
            expect(gameView.viewModel.get().isRevealWordButtonDisplayed).toEqual(false);
            expect(gameView.viewModel.get().isRevealStarterInstructionsButtonDisplayed).toEqual(true);
        });
    });

    describe('go to next player', () => {
        it('should go to next player', () => {
            gameView.update({
                currentPlayer: gameView.viewModel.get().players[0],
                isWordDisplayed: true,
                isRevealWordButtonDisplayed: false,
                isGoToNextButtonDisplayed: true
            });

            gameController.goToNextPlayer();

            expect(gameView.viewModel.get().currentPlayer).toEqual(gameView.viewModel.get().players[1]);
            expect(gameView.viewModel.get().isWordDisplayed).toEqual(false);
            expect(gameView.viewModel.get().isRevealWordButtonDisplayed).toEqual(true);
            expect(gameView.viewModel.get().isGoToNextButtonDisplayed).toEqual(false);
        });
    });

    describe('reveal starter instructions', () => {
        it('should reveal starter instructions', () => {
            gameView.update({
                isStarterInstructionsDisplayed: false,
                isWordDisplayed: true,
            });

            gameController.revealStarterInstructions();

            expect(gameView.viewModel.get().isStarterInstructionsDisplayed).toEqual(true);
            expect(gameView.viewModel.get().isWordDisplayed).toEqual(false);
        });
    });

    describe('navigate to home', () => {
        it('should navigate to home', () => {
            expect(fakeRouterAdapter.lastNavigatedPath).toBeUndefined();

            gameController.navigateToHome();

            expect(fakeRouterAdapter.lastNavigatedPath).toEqual('');
        });
    })

})