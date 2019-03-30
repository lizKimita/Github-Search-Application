import { User } from './../user';
import { Repo } from './../repo';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RepoDetailsService {

  repos:Repo
  user:User

  constructor(private http:HttpClient) {
    this.repos = new Repo("","");
   }

   repoDetails(){

     interface ApiResponse{
       user: any;
       name:string;
       description:string

     }

     let promise = new Promise ((resolve, reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/lizkimita/repos?access_token=125bd1682550988de7f398d8050bad5786a31059').toPromise().then(response=>{

      this.repos.name = response.user.name
      this.repos.description = response.user.description

        resolve()
      },

      error=>{
        this.repos.name = "It hasn't worked!"
        this.repos.description= "Cannot display description."
        reject(error)
        }
      )
    })
    return promise
   }
   

}