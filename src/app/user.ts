export class User {
    avatar_url: any;
    name: string;
    email: string;
    public_repos:string;
    bio:string;
    location:string;
    following: any;
    followers: any;
    html_url: any;
    repos: any;
    constructor(public login:string ) {
    }
}
