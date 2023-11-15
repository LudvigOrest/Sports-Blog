import { Component, Input } from '@angular/core';
import { Blogpost } from 'src/models/blogpost';
// Reusable component, get array of Blogpost through @Input() and render

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent {
  @Input() _posts: Blogpost[] = [];
}
