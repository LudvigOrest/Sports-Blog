import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkateViewComponent } from './views/skate-view/skate-view.component';
import { HeaderComponent } from './components/header/header.component';
import { SnowViewComponent } from './views/snow-view/snow-view.component';
import { OtherViewComponent } from './views/other-view/other-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { PostViewComponent } from './views/post-view/post-view.component';

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
    path: "other",
    component: OtherViewComponent,
  },
  {
    path: "home",
    component: HomeViewComponent,
  },
  {
    path: "post/:id",
    component: PostViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
