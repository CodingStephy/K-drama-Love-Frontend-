import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {YouTubePlayerModule} from '@angular/youtube-player';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { TrendingComponent } from './trending/trending.component';
import { RecommendedComponent } from './recommended/recommended.component';
@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    TrendingComponent,
    RecommendedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
