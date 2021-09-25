import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  playerConfig = {
    controls: 0,
    mute: 1,
    autoplay: 1
  };
  constructor() { }

  ngOnInit(): void {
  }

}
