import { Component, Input } from '@angular/core';
import { Blogpost } from 'src/models/blogpost';
import { ActivatedRoute } from '@angular/router';
import { AllPostsService } from 'src/app/services/all-posts.service';
// Reusable component, get array of Blogpost through @Input() and render

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent {
  constructor(
    public activatedRoute: ActivatedRoute,
    private postService: AllPostsService
    ) {}
  @Input() _posts: Blogpost[] = [];
}
