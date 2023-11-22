import { Component, Input } from '@angular/core';
import { Blogpost } from 'src/models/blogpost';
import { User } from 'src/models/user';
import { ActivatedRoute } from '@angular/router';
import { AllPostsService } from 'src/app/services/all-posts.service';
import { StorageService } from 'src/app/services/storage.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
// Reusable component, get array of Blogpost through @Input() and render

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent {
  constructor(
    public activatedRoute: ActivatedRoute,
    private postService: AllPostsService,
    private storageService: StorageService,
    private userService: CurrentUserService
    ) {}
  @Input() _posts: Blogpost[] = [];
  @Input() _header: string = '';

  get allUsers(): User[] {
    return this.storageService.getStorage('allUsers');
  }
  get currentUser(): User {
    return this.userService.currentUser;
  }

  savePost(id: number): void {
    this.currentUser.savePost(id);
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
