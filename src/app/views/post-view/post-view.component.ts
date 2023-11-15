import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllPostsService } from 'src/app/services/all-posts.service';
import { Blogpost } from 'src/models/blogpost';
import { __values } from 'tslib';
//Component to show a post and interact with it

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent {
  constructor(
    private postService: AllPostsService,
    public activatedRoute: ActivatedRoute
    ) {}
    
    params: any = this.activatedRoute.snapshot.params;
    id: number = this.params.id;

    post: Blogpost = this.postService.allPosts[this.id];
}
