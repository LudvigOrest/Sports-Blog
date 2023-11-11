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
  
  currentUser: User = new User("guest", "", false);
  constructor() { }
}
