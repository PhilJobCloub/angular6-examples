export class User {
    public name: string;
    public email : string;
    public id : number;

    constructor (name: string, id?:number, email?:string) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}