import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { AllPostsService } from 'src/app/services/all-posts.service';
import { Blogpost } from 'src/models/blogpost';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent {
  constructor(
    private storageService: StorageService,
    private postService: AllPostsService
    ) {}

  get allPosts(): Blogpost[] {
    return this.storageService.getStorage('postsArr');
  }

  removePost(_id: string): void {
    let id = parseInt(_id);
    let i = this.postService.allPosts.indexOf(this.postService.allPosts[id])
    this.postService.allPosts.splice(i, 1);
    this.storageService.setStorage('postsArr', this.postService.allPosts);
  }
}
