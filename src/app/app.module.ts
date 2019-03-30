
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repository/repository.component';
import { RepoDetailsService } from './repo-http/repo-details.service';
import { UserDetailsService } from './github-http/user-details.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    UserComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule,
    NgProgressHttpModule
  ],
  providers: [UserDetailsService, RepoDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
