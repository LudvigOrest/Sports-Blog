import { Component } from '@angular/core';
import { Blogpost } from 'src/modules/blogpost';
import { User } from 'src/modules/user';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { ModalsService } from 'src/app/services/modals.service';
import { AllPostsService } from 'src/app/services/all-posts.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private userService: CurrentUserService,
    private modalsService: ModalsService,
    private allPostService: AllPostsService,
    private storageService: StorageService
  ) { }

  get using(): User {
    return this.userService.currentUser;
  }
  get showAddPostModal(): boolean {
    return this.modalsService.addPostModal;
  }
  get showLogInModal(): boolean {
    return this.modalsService.logInModal;
  }

  login(): void {
    this.modalsService.logInModal = true;
    this.storageService.setStorage('currentUser', this.using);
  }

  openModal(): void {
    this.modalsService.addPostModal = true;
  }

  clearLocalStorage(): void {
    this.allPostService.clearLocal();
  }
}
