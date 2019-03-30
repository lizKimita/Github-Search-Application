import { environment } from './../environments/environment';
import { Repo } from './repo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GithubService {

  repos:Repo;

  constructor(private http:HttpClient) {
    this.repos = new Repo("", "")
   }

   userRepos(){

    interface ApiResponse{
      name: string;
      description:string;

    }
    let promise = new Promise ((resolve, reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/lizkimita/repos?access_token=125bd1682550988de7f398d8050bad5786a31059').toPromise().then(response=>{

      this.repos.name = response.name
      this.repos.description = response.description

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

