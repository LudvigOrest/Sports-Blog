import { Component } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { Blogpost } from 'src/models/blogpost';
import { AllPostsService } from 'src/app/services/all-posts.service';

@Component({
  selector: 'app-snow-view',
  templateUrl: './snow-view.component.html',
  styleUrls: ['./snow-view.component.css']
})
export class SnowViewComponent {
  constructor(private postService: AllPostsService) {}

  get snowPosts(): Blogpost[] {
    return this.postService.allPosts.filter((post) => { return post.category === "snow" });
  } 
}
