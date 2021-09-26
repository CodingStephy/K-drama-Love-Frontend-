import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faReddit, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  faTwitter = faTwitter
  faFacebook = faFacebook
  faInstagram = faInstagram
  faReddit = faReddit
  faTiktok = faTiktok
  constructor() { }

  ngOnInit(): void {
  }

}
