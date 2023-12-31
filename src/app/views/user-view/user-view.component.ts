import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { AllPostsService } from 'src/app/services/all-posts.service';
import { Blogpost } from 'src/modules/blogpost';
import { User } from 'src/modules/user';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {
  constructor(
    private storageService: StorageService,
    private userService: CurrentUserService,
    private postService: AllPostsService
  ) { }

  get user(): User {
    return this.userService.currentUser;
  }
  get allPosts(): Blogpost[] {
    if (localStorage.getItem('postsArr') != null) {
      this.postService.allPosts = this.storageService.getStorage('postsArr');
    }
    return this.storageService.getStorage('postsArr');
  }
  get savedPosts(): Blogpost[] {
    let savedIndex: number[] = this.userService.currentUser.likedPosts;
    let arr: Blogpost[] = this.allPosts;

    return arr.filter((post, y) => {
      for (let i = 0; i < savedIndex.length; i++) {
        if (this.allPosts[y].id === savedIndex[i]) {
          return post;
        }
      }
      return;
    })
  }
  get createdPosts(): Blogpost[] {
    let arr: Blogpost[] = JSON.parse(localStorage.getItem('postsArr') || '');
    return arr.filter((post) => { return post.creator.username === this.user.username });
  }
}
