import { User } from "./user";
import { Comment } from "./comment";
import { CurrentUserService } from "src/app/services/current-user.service";

//class for a blog post
export class Blogpost {
    id: number = 0;
    header: string;
    thumbnail: string;
    creator: User;
    tags: string[];
    date: string = "todays date"
    text: string;

    open: {
        likes: number;
        dislikes: number;
        // comments: Comment[] = [];
    }

    constructor(header: string, thumbnail: string, creator: User, tags: string[], text: string) {
        this.header = header;
        this.thumbnail = thumbnail;
        this.creator = creator;
        this.tags = tags;
        this.text = text;
        this.open = {likes : 0, dislikes : 0}
    }

    //like-dislike functions should only work when user is logged in (check in service what user-type i.e guest or logged in)
    like(currentUser: CurrentUserService): void {
        if (currentUser.type != "guest" ) {
            console.log("liked post");
            //this.open.likes ++;
        } else { 
            console.log("user is not logged in");
        }
    }

    dislike(currentUser: CurrentUserService) : void {
        if (currentUser.type != "guest") {
            console.log("disliked post");
            //this.likes --
        } else {
            console.log("user is not logged in");
        }
    }
}
