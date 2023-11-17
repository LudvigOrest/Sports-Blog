import { Component, ContentChild } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';
//TODO: "app-modal" is not customizable atm (choosing what the input types should be)

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  constructor(private modalsService: ModalsService) {}

  closeModal() {
    this.modalsService.logInModal = false;
  }
}
