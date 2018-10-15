export class Post {
    public title: string;
    public id : number;
    public body : string;

    constructor (title : string, id?:number, body? : string) {
        this.title = title;
        this.id = id;
        this.body = body;
    }
}