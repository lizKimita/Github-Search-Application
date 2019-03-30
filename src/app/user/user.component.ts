import { User } from './../user';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  newUser = new User("");
  @Output() addUser = new EventEmitter<User>()
  
  submitUser() {
    this.addUser.emit(this.newUser);
   }

  ngOnInit() {
  }

}
