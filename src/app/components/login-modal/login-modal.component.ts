import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { StorageService } from 'src/app/services/storage.service';
import { User } from 'src/modules/user';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  constructor(
    private modalsService: ModalsService,
    private userService: CurrentUserService,
    private storageService: StorageService
  ) { }

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

    for (let i = 0; i < this.userService.allUsers.length; i++) {
      if (this.userService.allUsers[i].username === username) {
        if (this.userService.allUsers[i].password === password) {
          this.userService.currentUser = this.user;
          console.log("nu loggade du in");
        }
      }
    }
  }

  register(username: string, password: string) {
    let regUser = new User(username, password, false);
    let occupied: boolean = false;
    for (let i = 0; i < this.userService.allUsers.length; i++) {
      if (this.userService.allUsers[i].username === username) {
        alert("Användarnamn upptaget");
        occupied = true;
        return;
      }
    }

    if (occupied === false) {
      this.userService.allUsers.push(regUser);
      this.storageService.setStorage('allUsers', this.userService.allUsers);
      this.userService.currentUser = regUser;
    }
  }
}
