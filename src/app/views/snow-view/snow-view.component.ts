import { Component } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { Blogpost } from 'src/models/blogpost';
import { AllPostsService } from 'src/app/services/all-posts.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-snow-view',
  templateUrl: './snow-view.component.html',
  styleUrls: ['./snow-view.component.css']
})
export class SnowViewComponent {
  constructor(
    private postService: AllPostsService,
    private storageService: StorageService) {}

  get snowPosts(): Blogpost[] {
    if(localStorage.getItem('postsArr') != null) {
      this.postService.allPosts = this.storageService.getStorage('postsArr');
    }
    let arr: Blogpost[] = this.storageService.getStorage('postsArr');
    return arr.filter((post) => { return post.category === "snow" });
  } 
}
