import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllPostsService } from 'src/app/services/all-posts.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
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
    public activatedRoute: ActivatedRoute
    ) {
      console.log("test")
      if (this.user.likedPosts.includes(this.id)) {
        console.log("Already liked this post");
      }
      if (this.user.dislikedPosts.includes(this.id)) {
        console.log("Already disliked this post");
      }
    }
    
    params: any = this.activatedRoute.snapshot.params;
    id: number = this.params.id;
    liked: boolean = this.checkIfLiked();
    disliked: boolean = this.checkIfDisliked();
    commentLiked: boolean[] = [];

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

    get post(): Blogpost {
      return this.postService.allPosts[this.id];
    }

    get user(): User {
      return this.userService.currentUser
    }

    
    //Like/Dislike checks if user has liked/disliked the post before, then limits the amounts of likes/dislikes by looking at this.liked/disliked boolean
    //You can unlike/un-dislike by pressing the button one more time
    //2nd 3rd if-statement handles if this post has been liked or not before
    like(): void {
      if (this.user.likedPosts.includes(this.id)) {
        this.post.open.likes --;
        let i = this.user.likedPosts.indexOf(this.id);
        this.user.likedPosts.splice(i, 1);
        this.liked = false;
      } else if (this.user.likedPosts.includes(this.id) === false && this.liked === false){
        this.post.open.likes ++;
        this.user.likedPosts.push(this.id);
        this.liked = true;
      } else if (this.user.likedPosts.includes(this.id) === false && this.liked === true) {
        this.post.open.likes --;
        let i = this.user.likedPosts.indexOf(this.id);
        this.user.likedPosts.splice(i, 1);
        this.liked = false;
      }
    }
    

    dislike(): void {
      if (this.user.dislikedPosts.includes(this.id)) {
        this.post.open.dislikes --;
        let i = this.user.dislikedPosts.indexOf(this.id);
        this.user.dislikedPosts.splice(i, 1);
        this.disliked = false;
      } else if (this.user.dislikedPosts.includes(this.id) === false && this.disliked === false) {
        this.post.open.dislikes ++;
        this.user.dislikedPosts.push(this.id);
        this.disliked = true;
      } else if (this.user.dislikedPosts.includes(this.id) === false && this.disliked === true) {
        this.post.open.dislikes --;
        let i = this.user.dislikedPosts.indexOf(this.id);
        this.user.dislikedPosts.splice(i, 1);
        this.disliked = false;
      }
    }

    comment(comments: string): void {
      let _comment = new Comment(this.user, comments, (this.post.open.comments.length -1))
      this.post.open.comments.push(_comment);
    }

    likeComment(index: number) {
      this.post.open.comments[index].open.likes += 1;
      this.commentLiked[index] = true;
    }
    unLikeComment(index:number) {
      this.post.open.comments[index].open.likes -= 1;
      this.commentLiked[index] = false;
    }
}
