import { Component } from '@angular/core';
import { Blogpost } from 'src/models/blogpost';
import { User } from 'src/models/user';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private userService: CurrentUserService) {}
  
  using: User = this.userService.currentUser;
  showAddPostModal: boolean = false;

  login(): void {
    this.userService.currentUser = new User("Bobäger", "Hejsan12", false);
    console.log("logged in as: " + this.userService.currentUser.username);
    this.using = this.userService.currentUser;
  }

  createPost(): void {
    this.showAddPostModal = true;
  }
}
