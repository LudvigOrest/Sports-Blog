import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Blogpost } from 'src/models/blogpost';
import { AllPostsService } from 'src/app/services/all-posts.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent {
  constructor(
    private storageService: StorageService,
    private postService: AllPostsService
    ) {}

  get allPosts(): Blogpost[]  {
    if(localStorage.getItem('postsArr') != null) {
      this.postService.allPosts = this.storageService.getStorage('postsArr');
    }
    return this.storageService.getStorage('postsArr');
  }
}
