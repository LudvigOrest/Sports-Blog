import { Component } from '@angular/core';
import { Blogpost } from 'src/models/blogpost';
import { User } from 'src/models/user';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private userService: CurrentUserService,
    private modalsService: ModalsService
    ) {}
  
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
  }

  openModal(): void {
    this.modalsService.addPostModal = true;
  }
}
