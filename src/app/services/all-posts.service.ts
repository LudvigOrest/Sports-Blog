import { Injectable, EventEmitter } from '@angular/core';
import { Blogpost } from 'src/models/blogpost';
import { User } from 'src/models/user';
import { CurrentUserService } from './current-user.service';
import { BlogPostsComponent } from '../components/blog-posts/blog-posts.component';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AllPostsService {
  constructor(private storageService: StorageService) {
    if(localStorage.getItem('postsArr') == null) {
      this.fillLocal();
    }
  }
  placeholderUrl: string = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallsdesk.com%2Fwp-content%2Fuploads%2F2017%2F01%2FPictures-of-Skateboarding.jpg&f=1&nofb=1&ipt=392677f657969c327b047f53e6bea054e928eeeb4ec07b85dee6389f68160cf7&ipo=images";
  testUser: User = new User("testnamn", "lösen", false);

  //Refer to allPosts in the views/components and filter from category. New posts should be added to this array as well
  allPosts: Blogpost[] = [];

  fillLocal(): void {
    this.allPosts.push(new Blogpost("headerTest", this.placeholderUrl, "skateboard", this.testUser, ["tags", "tag2"], "blabla"));
    this.allPosts.push(new Blogpost("headerTest2", this.placeholderUrl, "skateboard", this.testUser, ["tags2", "tag3"], "Lorem ipsum alor doler meler set, comovar pisces las detto los sientos." 
    + "Tape alfa desto sengo cruz. Var pisces las detto los sientos. "
    + "comovar pisces las detto los"));
    this.allPosts.push(new Blogpost("headerTest", this.placeholderUrl, "skateboard", this.testUser, ["tags", "tag2"], "blabla"));
    this.allPosts.push(new Blogpost("headerTest2", this.placeholderUrl, "skateboard", this.testUser, ["tags2", "tag3"], "Lorem ipsum alor doler meler set, comovar pisces las detto los sientos." 
    + "Tape alfa desto sengo cruz. Var pisces las detto los sientos. Tape alfa desto sengo cruz. Var pisces las detto los sientos. Tape alfa desto sengo cruz. Var pisces las detto los sientos."
    + "comovar pisces las detto los"));
    this.allPosts.push(new Blogpost("headerTest", this.placeholderUrl, "skateboard", this.testUser, ["tags", "tag2"], "blabla"));
    this.allPosts.push(new Blogpost("headerTest2", this.placeholderUrl, "snow", this.testUser, ["tags2", "tag3"], "Lorem ipsum alor doler meler set, comovar pisces las detto los sientos." 
    + "Tape alfa desto sengo cruz. Var pisces las detto los sientos. "
    + "comovar pisces las detto los"));

    for (let i = 0; i < this.allPosts.length; i++) {
      this.allPosts[i].id = i;
    }
    this.storageService.setStorage('postsArr', this.allPosts);
  }

  clearLocal(): void {
    this.storageService.clearStorage();
  }

  setLocal(data: any): void {
    localStorage.setItem('postsArr', JSON.stringify(data));
  }

  addPost(post: Blogpost): void {
    this.allPosts.push(post);
    post.id = this.allPosts.length - 1;
    localStorage.setItem('postsArr', JSON.stringify(this.allPosts));
  }

  removePost(post: Blogpost): void {
    console.log(post);
    let i = this.allPosts.indexOf(post);
    this.allPosts.splice(i, 1);
    this.storageService.setStorage('postsArr', this.allPosts);
  }
}
