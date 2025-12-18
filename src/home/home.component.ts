import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HOME_CONTROLLER_TOKEN, HOME_PROVIDER } from './home.provider';
import { HomeView } from './home.view';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HOME_PROVIDER]
})
export class HomeComponent {
  private readonly homeView = inject(HomeView);
  protected readonly homeController = inject(HOME_CONTROLLER_TOKEN);

  protected get viewModel() {
    return this.homeView.viewModel.get();
  }
}
