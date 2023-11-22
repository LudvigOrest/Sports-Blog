import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllPostsService } from 'src/app/services/all-posts.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { StorageService } from 'src/app/services/storage.service';
import { Blogpost } from 'src/models/blogpost';
import { User } from 'src/models/user';
import { __values } from 'tslib';
import { Comment } from 'src/models/comment';
//Component to show a post and interact with it
//Inte perfekt, logga in som olika användare och gilla samma post så funkar det inte todo

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent {
  constructor(
    private postService: AllPostsService,
    private userService: CurrentUserService,
    private storageService: StorageService,
    public activatedRoute: ActivatedRoute
    ) {}
    
    params: any = this.activatedRoute.snapshot.params;
    id: number = this.params.id;
    commentLiked: boolean[] = [];

    

    get allPosts(): Blogpost[] {
      return this.storageService.getStorage('postsArr');
    }
    get post(): Blogpost {
      return this.allPosts[this.id];
    }
    get postInService(): Blogpost {
      if (this.allPosts != null) {
        this.postService.allPosts = this.allPosts;
      }
      return this.postService.allPosts[this.id];
    }

    
    get user(): User {
      return this.userService.currentUser;
    }
    
    
    //Like/Dislike checks if user has liked/disliked the post before, then limits the amounts of likes/dislikes by looking at this.liked/disliked boolean
    //You can unlike/un-dislike by pressing the button one more time
    //2nd 3rd if-statement handles if this post has been liked or not before
    like(): void {
      this.postInService.open.likes ++;
      this.storageService.setStorage('postsArr', this.postService.allPosts);
      let i = this.user.likedPosts.indexOf(this.id);
      this.user.likedPosts.splice(i, 1);
    }
    
    /**
     * 
      if (this.user.likedPosts.includes(this.id)) {
        this.postInService.open.likes --;
        let i = this.user.likedPosts.indexOf(this.id);
        this.user.likedPosts.splice(i, 1);
        this.liked = false;
      } else if (this.user.likedPosts.includes(this.id) === false && this.liked === false){
        this.postInService.open.likes ++;
        this.user.likedPosts.push(this.id);
        this.liked = true;
      } else if (this.user.likedPosts.includes(this.id) === false && this.liked === true) {
        this.postInService.open.likes --;
        let i = this.user.likedPosts.indexOf(this.id);
        this.user.likedPosts.splice(i, 1);
        this.liked = false;
      }
      this.storageService.setStorage('postsArr', this.postService.allPosts);


      checkIfLiked(): boolean {
      if (this.user.likedPosts.includes(this.id)) {
        return true;
      } else {
        return false;
      }
    }
    checkIfDisliked(): boolean {
      if (this.user.dislikedPosts.includes(this.id)) {
        return true;
      } else {
        return false;
      }
    }
     */

    dislike(): void {
      this.postInService.open.dislikes ++;
      this.storageService.setStorage('postsArr', this.postService.allPosts);
    }

    comment(comments: string): void {
      let _comment = new Comment(this.user, comments, (this.postInService.open.comments.length -1))
      this.postInService.open.comments.push(_comment);
      this.storageService.setStorage('postsArr', this.postService.allPosts);
    }

    likeComment(index: number) {
      this.postInService.open.comments[index].open.likes += 1;
      this.commentLiked[index] = true;
      this.storageService.setStorage('postsArr', this.postService.allPosts);
    }
    unLikeComment(index:number) {
      this.postInService.open.comments[index].open.likes -= 1;
      this.commentLiked[index] = false;
      this.storageService.setStorage('postsArr', this.postService.allPosts);
    }
}
