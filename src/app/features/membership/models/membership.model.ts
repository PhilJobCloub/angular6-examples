export class Membership {
    public title : string;
    public body : string;
    public id : number;
    public userId : number;

    constructor(title : string, body : string, id : number, userId : number) {
        this.title = title;
        this.body = body;
        this.id = id;
        this.userId = userId;
    }
}
