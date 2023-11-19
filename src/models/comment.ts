import { User } from "./user";

//class with comment information. User, text, likes/dislikes & date (?)
export class Comment {
    user: User;
    text: string;
    id: number;
    open: {
        likes: number;
    }

    constructor(user: User, text: string, id: number) {
        this.user = user;
        this.text = text;
        this.id = id;
        this.open = {likes: 0}
    }
}
