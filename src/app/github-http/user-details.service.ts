import { Repo } from './../repo';
import { User } from './../user';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserDetailsService {

  user:User;

  constructor(private http:HttpClient) {
    this.user= new User("");
   }

   userDetails(){

    interface ApiResponse{
      login:string;
    }

    let promise = new Promise ((resolve, reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl+this.user+"?access_token=" + environment.access_token).toPromise().then(response=>{

        this.user.login = response.login

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
