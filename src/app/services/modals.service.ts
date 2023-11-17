import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {
  
  constructor() { }
  addPostModal: boolean = false;
  logInModal: boolean = false;
  registerModal: boolean = false;
}
