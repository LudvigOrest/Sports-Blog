import { Blogpost } from "./blogpost";

//User class, containing username, favorite-posts, Admin-rights(bool) & created posts (by post-id) 
export class User {
    username: string;
    password: string;
    createdPosts: Blogpost[] = [];
    favoritePosts: Blogpost[] = [];
    admin: boolean;

    constructor(username: string, password: string, admin: boolean) {
        this.username = username;
        this.password = password;
        this.admin = admin;
    }
}
