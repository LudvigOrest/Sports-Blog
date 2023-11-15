import { Component } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { AllPostsService } from 'src/app/services/all-posts.service';
import { User } from 'src/models/user';
import { Blogpost } from 'src/models/blogpost';

@Component({
  selector: 'app-create-post-modal',
  templateUrl: './create-post-modal.component.html',
  styleUrls: ['./create-post-modal.component.css']
})
export class CreatePostModalComponent {
  constructor(
    private userService: CurrentUserService,
    private postService: AllPostsService
    ) {}

  user: User = this.userService.currentUser;

  createPost(header: string, thumbnail: string, category: string, tags: string, text: string): void {
    console.log("post created");
    if (this.user.username != "guest") {
      let tagArr: string[] = tags.split(',');
      let newPost: Blogpost = new Blogpost(header, thumbnail, category, this.user, tagArr, text)
      this.postService.addPost(newPost);
      console.log(this.postService.allPosts);
    } else {
      alert("Du är ej inloggad")
    }
  }
}
