import { Component } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { Blogpost } from 'src/models/blogpost';
import { StorageService } from 'src/app/services/storage.service';

// In this view the user is able to look at all the thumbnails of the blog posts, if the user clicks on a post they should be directed to the selected post

@Component({
  selector: 'app-skate-view',
  templateUrl: './skate-view.component.html',
  styleUrls: ['./skate-view.component.css']
})
export class SkateViewComponent {
  constructor(
    private storageService: StorageService
    ) {}

  get allPosts(): Blogpost[] {
    return this.storageService.getStorage('postsArr');
  }

  get skatePosts(): Blogpost[] {
    return this.allPosts.filter((post) => { return post.category === "skateboard" });
  }

  test(): void {
    console.log(this.skatePosts);
  }
}
