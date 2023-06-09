import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  users:User[] = [];
  newUser:User = {} as User;
  display:boolean = false;

  @Output() changed: EventEmitter<User> = new EventEmitter<User>();

  constructor(private userApi:UsersService){}
  
  ngOnInit(): void {
    return this.loadUsers();
  }

  loadUsers(){
    this.userApi.getAllUsers().subscribe(
      (result) => {
        this.users = result;
      }
    );
  }

  addUser(newUser:User){
    this.userApi.createUser(newUser).subscribe(
      () => {
        this.users.push(newUser);
      }
    )
    
  }

  toggleDisplay(){
    this.display = !this.display;
  }
  

  
}
