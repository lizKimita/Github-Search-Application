import { environment } from './../../environments/environment';
import { Repo } from './../repo';
import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UserDetailsService {

  user:User;
  newUser: string;

  constructor(private http:HttpClient) {
    this.user= new User("");
   }

   userDetails(){

    interface ApiResponse{
      html_url: any;
      followers: any;
      following: any;
      name: string;
      login:string;
      avatar_url:any;
      email:string;
      public_repos:string;
      bio:string;
      location:string;
    }

    let promise = new Promise ((resolve, reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/lizkimita?access_token=125bd1682550988de7f398d8050bad5786a31059').toPromise().then(response=>{

        this.user.login = response.login
        this.user.name = response.name
        this.user.avatar_url = response.avatar_url
        this.user.email = response.email
        this.user.public_repos = response.public_repos
        this.user.bio = response.bio
        this.user.location = response.location
        this.user.following = response.following
        this.user.followers = response.followers
        this.user.html_url = response.html_url

        resolve()
      },
      error=>{
        this.user.login = "It hasn't worked!"
        reject(error)
        }
      )
    })
    return promise
   }


   

}
