import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GAME_CONTROLLER_TOKEN, GAME_PROVIDER } from './game.provider';
import { GameView } from './game.view';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GAME_PROVIDER]
})
export class GameComponent {
  private readonly gameView = inject(GameView);
  protected readonly gameController = inject(GAME_CONTROLLER_TOKEN);

  protected get viewModel() {
    return this.gameView.viewModel.get();
  }
}
