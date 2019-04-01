
import { environment } from './../../environments/environment';
import { Repo } from './../repo';
import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';



@Injectable()
export class UserDetailsService {

  // user:User;
  // public newUser:string;
  // repos:Repo;

  // constructor(private http:HttpClient) {
  //   this.user= new User(" ");
  //   this.repos = new Repo("", "");
  //   this.newUser = "lizKimita";
  //  }

  //  userDetails(x){

  //   interface ApiResponse{
  //     html_url: any;
  //     followers: any;
  //     following: any;
  //     name: string;
  //     login:string;
  //     avatar_url:any;
  //     email:string;
  //     public_repos:string;
  //     bio:string;
  //     location:string;
      
      
  //   }

  //   let promise = new Promise ((resolve, reject)=>{
  //     this.http.get<ApiResponse>(environment.apiUrl + x + environment.accessToken).toPromise().then(response=>{

  //       this.user.login = response.login
  //       this.user.name = response.name
  //       this.user.avatar_url = response.avatar_url
  //       this.user.email = response.email
  //       this.user.public_repos = response.public_repos
  //       this.user.bio = response.bio
  //       this.user.location = response.location
  //       this.user.following = response.following
  //       this.user.followers = response.followers
  //       this.user.html_url = response.html_url

  //       resolve()
  //     },
  //     error=>{
  //       this.user.login = "It hasn't worked!"
  //       reject(error)
  //       }
  //     )
  //   })
  //   return promise
  //  }

  user:User;
  repos:Repo[];
  public username:string;

  constructor(private http:HttpClient) {
      this.user= new User("","","","","","","","","","");  
      this.repos=[];
      //this.repos = new Repo("", "");
      this.username = "lizKimita";
     }
     getUserInfo(){

      interface UserInfo{
        login:string;
        avatar_url:string;
        name:string;
        email:string;
        public_repos:string;
        followers:number;
        following:number;
        html_url:string;
        created_at:string;
        bio:string;
        location:string;
   
    }
   
      let promise = new Promise((resolve,reject)=>{
        this.http.get<UserInfo>(environment.apiUrl+this.username +environment.accessToken).toPromise().then(response=>{
          this.user.login= response.login
          this.user.avatar_url = response.avatar_url
          this.user.public_repos = response.public_repos
          this.user.followers=response.followers
          this.user.following=response.following
          this.user.html_url=response.html_url
          this.user.bio=response.bio
          console.log(this.user);
          resolve()
         },error=>{
           this.user.login = "Error Fetching Data"
           this.user.avatar_url = "Error Fetching Data"
           this.user.public_repos = "Error"
           reject(error)
         })
      })
       return promise
     }

     getRepos(){

      interface ApiResponse{
        name:string;
        description:string;
        
   
    }
   
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse[]>(environment.apiUrl+this.username + environment.repos +environment.accessToken).toPromise().then(response=>{
 
        response.forEach(repo => {
          this.repos.push(new Repo(repo.name,repo.description))
        });
 
        console.log(response);
        resolve()
       },error=>{
         reject(error)
       })
    })
       return promise
     }
     update(username:string){
       this.username=username;
     }
}
