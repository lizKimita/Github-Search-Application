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
      this.http.get<ApiResponse>("https://api.github.com/users/lizkimita?access_token=125bd1682550988de7f398d8050bad5786a31059").toPromise().then(response=>{

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
