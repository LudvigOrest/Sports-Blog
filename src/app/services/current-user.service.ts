import { Injectable } from '@angular/core';
import { User } from 'src/models/user';

/**
 * This service should keep track if the user is "Guest" || "*username*" || "Admin"
 * Other components will use this service to display correct things according to what the user type is
 */

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  constructor() {
  }

  admin: User = new User("admin", "admin", true);
  guest: User = new User("guest", "", false);
  currentUser: User = this.guest; //Automatically log in as guest

  allUsers: User[] = [this.admin, this.guest];

  login(user: User) {
    if(this.allUsers.includes(user)) {
      console.log("korrekt användarnamn")
      this.currentUser = user;
    } else {
      console.log("fel inlogg");
    }
    
  }
}
