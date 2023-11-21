import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SkateViewComponent } from './views/skate-view/skate-view.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { SnowViewComponent } from './views/snow-view/snow-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { PostViewComponent } from './views/post-view/post-view.component';
import { CreatePostModalComponent } from './components/create-post-modal/create-post-modal.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { UserViewComponent } from './views/user-view/user-view.component';
import { AdminViewComponent } from './views/admin-view/admin-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkateViewComponent,
    BlogPostsComponent,
    SnowViewComponent,
    HomeViewComponent,
    PostViewComponent,
    CreatePostModalComponent,
    LoginModalComponent,
    AboutViewComponent,
    UserViewComponent,
    AdminViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
