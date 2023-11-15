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
import { OtherViewComponent } from './views/other-view/other-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkateViewComponent,
    BlogPostsComponent,
    SnowViewComponent,
    HomeViewComponent,
    PostViewComponent,
    OtherViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
