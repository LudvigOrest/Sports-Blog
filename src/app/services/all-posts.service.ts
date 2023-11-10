import { Injectable } from '@angular/core';
import { Blogpost } from 'src/models/blogpost';
import { User } from 'src/models/user';
import { CurrentUserService } from './current-user.service';

@Injectable({
  providedIn: 'root'
})
export class AllPostsService {

  allPosts: Blogpost[] = [];
  testUser: User = new User("testnamn", "lösen", false);

  constructor() {
    this.allPosts.push(new Blogpost("headerTest", "imgUrl", this.testUser, ["tags", "tag2"], "blabla"));
    this.allPosts.push(new Blogpost("headerTest2", "imgUrl", this.testUser, ["tags2", "tag3"], "blabla2"));
    console.log(this.allPosts);
  }
}
