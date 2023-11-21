import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  setStorage(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getStorage(key: string): any {  
    return JSON.parse(localStorage.getItem(key) || '');
  }

  clearStorage() {
    localStorage.clear();
  }
}
