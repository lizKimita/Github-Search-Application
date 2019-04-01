
import { UserDetailsService } from './../github-http/user-details.service';
import { Repo } from './../repo';
import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RepoDetailsService } from '../repo-http/repo-details.service';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  providers: [UserDetailsService, RepoDetailsService],
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user:User;
  repos:Repo;
  newUser:"";
  changeUser = "";


  constructor(private http:HttpClient, private userService:UserDetailsService,private repoService:RepoDetailsService) { 
     
  }

  ngOnInit() {
    this.userService.userDetails(this.newUser)
    this.user=this.userService.user
    
    this.repoService.repoDetails()
   this.repos=this.repoService.repos
    }
  }


