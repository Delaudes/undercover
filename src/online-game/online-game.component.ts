import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ONLINE_GAME_CONTROLLER_TOKEN } from './online-game.provider';
import { OnlineGameView } from './online-game.view';

@Component({
    selector: 'app-online-game',
    imports: [],
    templateUrl: './online-game.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnlineGameComponent {
    private readonly onlineGameView = inject(OnlineGameView);
    protected readonly onlineGameController = inject(ONLINE_GAME_CONTROLLER_TOKEN);

    protected get viewModel() {
        return this.onlineGameView.viewModel.get();
    }
}
