import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkateViewComponent } from './views/skate-view/skate-view.component';
import { HeaderComponent } from './components/header/header.component';
import { SnowViewComponent } from './views/snow-view/snow-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { PostViewComponent } from './views/post-view/post-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { UserViewComponent } from './views/user-view/user-view.component';
import { AdminViewComponent } from './views/admin-view/admin-view.component';

const routes: Routes = [
  {
    path: "",
    component: SkateViewComponent,
  },
  {
    path: "snow",
    component: SnowViewComponent,
  },
  {
    path: "about",
    component: AboutViewComponent,
  },
  {
    path: "home",
    component: HomeViewComponent,
  },
  {
    path: "post/:id",
    component: PostViewComponent,
  },
  {
    path: "acc/:username",
    component: UserViewComponent,
  },
  {
    path: "admin",
    component: AdminViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
