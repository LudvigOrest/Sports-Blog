import { Component } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { Blogpost } from 'src/models/blogpost';
import { AllPostsService } from 'src/app/services/all-posts.service';

// In this view the user is able to look at all the thumbnails of the blog posts, if the user clicks on a post they should be directed to the selected post

@Component({
  selector: 'app-skate-view',
  templateUrl: './skate-view.component.html',
  styleUrls: ['./skate-view.component.css']
})
export class SkateViewComponent {
  constructor(private postService: AllPostsService) {}

  skatePosts: Blogpost[] = this.postService.allPosts.filter((post) => { return post.category === "skateboard" });
  posts = this.skatePosts;

  test(): void {
    console.log(this.posts);
  }
}
