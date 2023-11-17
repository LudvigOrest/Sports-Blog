import { Component, ContentChild } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { AllPostsService } from 'src/app/services/all-posts.service';
import { User } from 'src/models/user';
//TODO: Log in doesn't work for some reason...

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  constructor(
    private modalsService: ModalsService,
    private userService: CurrentUserService,
    private postService: AllPostsService
    ) {}

  user: User = new User("", "", false);
  get allUsers() {
    return this.userService.allUsers;
  }

  closeModal() {
    this.modalsService.logInModal = false;
  }

  login(username: string, password: string) {
    console.log(username);
    console.log(password);
    
    if (username != "admin") {
      this.user = new User(username, password, false);
    } else {
      this.user = new User(username, password, true);
    }

    if (this.allUsers.includes(this.user)) {
      this.userService.currentUser = this.user;
    }
  }

  register() {
    console.log("works")
  }
}
