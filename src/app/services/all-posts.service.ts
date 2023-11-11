import { Injectable } from '@angular/core';
import { Blogpost } from 'src/models/blogpost';
import { User } from 'src/models/user';
import { CurrentUserService } from './current-user.service';

@Injectable({
  providedIn: 'root'
})
export class AllPostsService {

  placeholderUrl: string = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallsdesk.com%2Fwp-content%2Fuploads%2F2017%2F01%2FPictures-of-Skateboarding.jpg&f=1&nofb=1&ipt=392677f657969c327b047f53e6bea054e928eeeb4ec07b85dee6389f68160cf7&ipo=images";
  allPosts: Blogpost[] = [];
  testUser: User = new User("testnamn", "lösen", false);

  constructor() {
    this.allPosts.push(new Blogpost("headerTest", this.placeholderUrl, this.testUser, ["tags", "tag2"], "blabla"));
    this.allPosts.push(new Blogpost("headerTest2", this.placeholderUrl, this.testUser, ["tags2", "tag3"], "Lorem ipsum alor doler meler set, comovar pisces las detto los sientos." 
    + "Tape alfa desto sengo cruz. Var pisces las detto los sientos. "
    + "comovar pisces las detto los..."));

    for (let i = 0; i < this.allPosts.length; i++) {
      this.allPosts[i].id = i;
    }
    console.log(this.allPosts);
  }
}
