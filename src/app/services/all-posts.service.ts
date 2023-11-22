import { Injectable, EventEmitter } from '@angular/core';
import { Blogpost } from 'src/modules/blogpost';
import { User } from 'src/modules/user';
import { CurrentUserService } from './current-user.service';
import { BlogPostsComponent } from '../components/blog-posts/blog-posts.component';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AllPostsService {
  constructor(
    private storageService: StorageService,
    private userService: CurrentUserService
  ) {
    if (localStorage.getItem('postsArr') == null) {
      this.fillLocal();
    }
  }
  
  placeholderUrl: string[] = [
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallsdesk.com%2Fwp-content%2Fuploads%2F2017%2F01%2FPictures-of-Skateboarding.jpg&f=1&nofb=1&ipt=392677f657969c327b047f53e6bea054e928eeeb4ec07b85dee6389f68160cf7&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1769553%2Fpexels-photo-1769553.jpeg%3Fcs%3Dsrgb%26dl%3Daction-air-balance-1769553.jpg%26fm%3Djpg&f=1&nofb=1&ipt=40e152001b06d4f3132e3b21b32ff1fb5ffed3f8d10e2f835ab08e5fefe84552&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F8%2F37%2FFs9Sku.jpg&f=1&nofb=1&ipt=194a9c44f54c0a72c3644c8a0f698505314bbebd00978a1d374cbd73cf1aec42&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.funtasticrides.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fskateboard-diagram-1536x954.jpg&f=1&nofb=1&ipt=cccb4f87917f09c955766d109f58964a0c6d9bbadc1145a0ab7d8c6232e50366&ipo=images",
    //snow
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.independent.co.uk%2Fs3fs-public%2Fthumbnails%2Fimage%2F2017%2F11%2F20%2F15%2Fsnowboarding.jpg&f=1&nofb=1&ipt=27a4a0550427910029f364bc7f23a60543c9400410921606da14043147f000b4&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fheuserlaw.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fskiing-snowboarding-accident-lawsuit-01-e1484340742313.jpg&f=1&nofb=1&ipt=c322050a86ca8f0f7b36d33885c481c98812ef0eea1329554d61aaedd1d8dc16&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2FBLRG4Mn.jpg&f=1&nofb=1&ipt=44e37d41c60e1f757626f0a873a37bb02d40b87b459d36f8b13e9262e0627540&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.skimag.com%2Fwp-content%2Fuploads%2Fsites%2F13%2F2020%2F12%2F20190305-skitest-allmtn-068.jpg&f=1&nofb=1&ipt=87f64c06120da35647516aad97579b2314989120d93738a0dc8aa495f31fb841&ipo=images",
  ];
  admin: User = this.userService.admin;
  testUser: User = new User("Bobäger", "bob", false);

  allPosts: Blogpost[] = [];
  viewing: number = 0;

  fillLocal(): void {
    this.allPosts.push(new Blogpost("Vert-skejtande", this.placeholderUrl[1], "skateboard", this.admin, ["vert", "tricks"], "Vad tänker du på när du hör vert? 90-gradiga ramper och tape alfa desto sengo cruz. Var pisces las detto los sientos. "));
    this.allPosts.push(new Blogpost("Bobäger's nya video", this.placeholderUrl[0], "skateboard", this.testUser, ["film", "part"], "Bobäger är den bästaste skejtaren jag vet, han äger. Han border bli Sveriges kung och president och stadsminister. När bobäger gör armhävningar så häver han inte upp sig själv, utan han trycker ner jorden. Så stark e han. "));
    this.allPosts.push(new Blogpost("Howto: Indy", this.placeholderUrl[1], "skateboard", this.testUser, ["grabs", "ramp"], "Hur gör man en indy-grab? Läs inlägget för att lära dig hur man gör det absolut lorem ipsum alor doler meler set, comovar pisces las detto los sientos."
      + "Tape alfa desto sengo cruz. Var pisces las detto los sientos. "
      + "comovar pisces las detto los"));
    this.allPosts.push(new Blogpost("Att övervinna rädslan", this.placeholderUrl[2], "skateboard", this.admin, ["mentalitet", "skate"], "När pulsen ökar och man undrar ifall det verkligen lorem ipsum alor doler meler set, comovar pisces las detto los sientos. "));
    this.allPosts.push(new Blogpost("Vilken bräda?", this.placeholderUrl[3], "skateboard", this.testUser, ["setup", "bräda"], "Vilken bräda som en person har beror på många anledningar och preferenser. Lorem ipsum alor doler meler set, comovar pisces las detto los sientos."
      + "Tape alfa desto sengo cruz. Var pisces las detto los sientos. Tape alfa desto sengo cruz. Var pisces las detto los sientos. Tape alfa desto sengo cruz. Var pisces las detto los sientos."
      + "comovar pisces las detto los"));
    this.allPosts.push(new Blogpost("Bobäger's nya video", this.placeholderUrl[2], "skateboard", this.testUser, ["film", "part"], "Bobäger är den bästaste skejtaren jag vet, han äger. Han border bli Sveriges kung och president och stadsminister. När bobäger gör armhävningar så häver han inte upp sig själv, utan han trycker ner jorden. Så stark e han. "));
    this.allPosts.push(new Blogpost("Nybörjar-grabs", this.placeholderUrl[5], "snow", this.admin, ["beginner", "grab"], "Lorem ipsum alor doler meler set, comovar pisces las detto los sientos."
      + "Tape alfa desto sengo cruz. Var pisces las detto los sientos. "
      + "comovar pisces las detto los"));
    this.allPosts.push(new Blogpost("Vintersäsongen", this.placeholderUrl[6], "snow", this.testUser, ["vinter", "väder"], "Nu närmar sig vintersäsongen och jag har upptäckt att lorem ipsum alor doler meler set, comovar pisces las detto los sientos."
      + "Tape alfa desto sengo cruz. Var pisces las detto los sientos. "
      + "comovar pisces las detto los"));
    this.allPosts.push(new Blogpost("Favorit-resort", this.placeholderUrl[7], "snow", this.testUser, ["disskusion", "resort"], "Dela med dig vilket resort du älskar! Lorem ipsum alor doler meler set, comovar pisces las detto los sientos."
      + "Tape alfa desto sengo cruz. Var pisces las detto los sientos. "
      + "comovar pisces las detto los"));
    this.allPosts.push(new Blogpost("Skidåkning e nice", this.placeholderUrl[4], "snow", this.admin, ["skidor", "snow"], "Skidor har sina fördelar och det kan vara kul att experimentera med både lorem ipsum alor doler meler set, comovar pisces las detto los sientos."
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
    for (let i = 0; i < this.allPosts.length; i++) {
      if (this.allPosts[i].id === post.id) {
        let index = i;
        this.allPosts.splice(index, 1);
        for (let y = index; y < this.allPosts.length; y++) {
          this.allPosts[y].id --;
        }
        this.storageService.setStorage('postsArr', this.allPosts);
      }
    }
  }
}
