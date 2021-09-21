import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllDramasComponent } from './all-dramas/all-dramas.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyListComponent } from './my-list/my-list.component';
import { SingleDramaComponent } from './single-drama/single-drama.component';

const routes: Routes = [
 { path: "show", component: AllDramasComponent},
 {path: "", component: HomeComponent},
 {path: "show/:id", component: SingleDramaComponent},
 {path: "signup", component: FormComponent},
 {path: "login", component: LoginComponent},
 {path: "mylist", component: MyListComponent},
 {path: "about", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
