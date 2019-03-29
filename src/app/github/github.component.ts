import { Repo } from './../repo';
import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user:User;

  constructor(private http:HttpClient) { }

  ngOnInit() {

    interface ApiResponse{
      
      login:string;
     
    }

    this.http.get<ApiResponse>('https://api.github.com/users/lizkimita?access_token= +125bd1682550988de7f398d8050bad5786a31059').subscribe(data=>{
    this.user = new User(data.login)
    })
  }

}
