import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'KdramaLove';
  public isMenuCollapsed = true;
  playerConfig = {
    controls: 0,
    mute: 1,
    autoplay: 1
  };
}
