import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { AllPostsService } from 'src/app/services/all-posts.service';
import { Blogpost } from 'src/modules/blogpost';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent {
  constructor(
    private storageService: StorageService,
    private postService: AllPostsService
  ) { }

  get allPosts(): Blogpost[] {
    if (localStorage.getItem('postsArr') != null) {
      this.postService.allPosts = this.storageService.getStorage('postsArr');
    }
    return this.storageService.getStorage('postsArr');
  }

  removePost(id: number): void {
    let post: Blogpost;
    for (let i = 0; i < this.postService.allPosts.length; i++) {
      if (this.postService.allPosts[i].id === id) {
        post = this.postService.allPosts[i];
        this.postService.removePost(post);
      }
    }
  }
}