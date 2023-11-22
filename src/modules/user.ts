import { StorageService } from "src/app/services/storage.service";
import { Blogpost } from "./blogpost";

//User class, containing username, favorite-posts, Admin-rights(bool) & created posts (by post-id) 
export class User {
    username: string;
    password: string;
    createdPosts: Blogpost[] = [];
    favoritePosts: Blogpost[] = [];
    admin: boolean;
    likedPosts: number[] = [];

    constructor(username: string, password: string, admin: boolean) {
        this.username = username;
        this.password = password;
        this.admin = admin;
    }

    savePost(postId: number): void {
        if (this.likedPosts.includes(postId)) {
            let i = this.likedPosts.indexOf(postId);
            this.likedPosts.splice(i, 1);
        } else {
            this.likedPosts.push(postId);
        }
    }
}
