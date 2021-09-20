import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {YouTubePlayerModule} from '@angular/youtube-player';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { TrendingComponent } from './trending/trending.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { AllDramasComponent } from './all-dramas/all-dramas.component';
import { SingleDramaComponent } from './single-drama/single-drama.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MyListComponent } from './my-list/my-list.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    TrendingComponent,
    RecommendedComponent,
    AllDramasComponent,
    SingleDramaComponent,
    FormComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MyListComponent,
    AboutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    NgbModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent}
    ]),
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
