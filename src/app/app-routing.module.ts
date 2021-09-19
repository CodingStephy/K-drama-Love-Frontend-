import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDramasComponent } from './all-dramas/all-dramas.component';
import { HomeComponent } from './home/home.component';
import { SingleDramaComponent } from './single-drama/single-drama.component';

const routes: Routes = [
 { path: "show", component: AllDramasComponent},
 {path: "", component: HomeComponent},
 {path: "show/:id", component: SingleDramaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
