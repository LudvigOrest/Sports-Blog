import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Blogpost } from 'src/modules/blogpost';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.css']
})
export class AboutViewComponent {

  sendForm(header: string, text: string, mail: string) {
    console.log('rubrik: ' + header + ', text: ' + text + ", mail: " + mail);
  }
}