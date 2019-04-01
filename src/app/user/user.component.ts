import { GithubComponent } from './../github/github.component';
import { UserDetailsService } from './../github-http/user-details.service';
import { User } from './../user';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RepoDetailsService } from '../repo-http/repo-details.service';
import { Repo } from '../repo';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserDetailsService, RepoDetailsService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  user:User;
  repos:Repo[];
  public username:string;

  submitUser(){
    this.userService.update(this.username);
    this.userService.getUserInfo();
    this.userService.getRepos();
    // this.changeUser = this.newUser;
    // console.log (this.changeUser);
    // this.userService.userDetails(this.changeUser);
    // this.user = this.userService.user;
    // this.users = [];
    // this.users.push(this.user);
    // console.log (this.user)
  }

  constructor(private userService:UserDetailsService,private repoService:RepoDetailsService) { 
     
  }
  
  //submitUser() {
   // this.userService.updateProfile(this.newUser);
    //this.userService.userDetails();
  // }

  ngOnInit() {
    this.userService.getUserInfo();
    this.user=this.userService.user;
    this.userService.getRepos();
    this.repos=this.userService.repos;
    
  }

}
