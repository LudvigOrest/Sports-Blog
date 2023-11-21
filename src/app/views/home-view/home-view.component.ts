import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Blogpost } from 'src/models/blogpost';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent {
  constructor(private storageService: StorageService) {}

  get allPosts(): Blogpost[]  {
    return this.storageService.getStorage('postsArr');
  }
}
