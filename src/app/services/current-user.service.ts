import { Injectable } from '@angular/core';
import { User } from 'src/modules/user';
import { StorageService } from './storage.service';

/**
 * This service should keep track if the user is "Guest" || "*username*" || "Admin"
 * Other components will use this service to display correct things according to what the user type is
 */

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  constructor(private storageService: StorageService) {
    storageService.setStorage('allUsers', this.allUsers);
    console.log(storageService.getStorage('allUsers'));
  }

  admin: User = new User("admin", "admin", true);
  guest: User = new User("guest", "", false);
  currentUser: User = this.admin; //Automatically logs in as ---

  allUsers: User[] = this.test();

  login(user: User): void {
    if (this.allUsers.includes(user)) {
      console.log("korrekt användarnamn")
      this.currentUser = user;
      this.storageService.setStorage('currentUser', this.currentUser)
    } else {
      console.log("fel inlogg");
    }
  }

  test(): User[] {
    if ('allUsers' in localStorage) {
      console.log(this.storageService.getStorage('allUsers'))
      return this.storageService.getStorage('allUsers');
    } else {
      return [this.admin, this.guest];
    }
  }
}
