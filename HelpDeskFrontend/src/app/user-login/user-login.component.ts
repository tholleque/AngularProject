import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';
import { User } from '../user';
import { Bookmark } from '../bookmark';
import { BookmarkService } from '../bookmark.service';
import { TicketService } from '../ticket.service';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  users:User[] = [];
  newUser:User = {} as User;
  display:boolean = false;
  bookmarks:Bookmark[] = [];
  isLoggedIn:boolean = false;
  userTickets:Ticket[] = [];

  @Output() changed: EventEmitter<User> = new EventEmitter<User>();

  constructor(private route: ActivatedRoute, private userApi:UsersService, private bookmarkApi:BookmarkService, private ticketApi:TicketService){}
  
  ngOnInit(): void {
     this.loadUsers();
     if(this.userApi.currentUser.id !== null){
      this.loadUserBookmarks();
     }
  }

  loadUserBookmarks(){
    this.bookmarkApi.getBookmarkByUserId(this.userApi.currentUser.id).subscribe(
      (result: Ticket[]) => {
        this.userTickets = result;
        console.log(result);
      }
    )
    
  }
  
  loadUsers(){
    this.userApi.getAllUsers().subscribe(
      (result) => {
        this.users = result;
        this.bookmarkApi.getAllBookmarks().subscribe(
          (result) => {
            this.bookmarks = result;
            this.fillOutBookmarks();
          }
        );
      }
    );
  }

  addUser(newUser:User){
    this.userApi.createUser(newUser).subscribe(
      () => {
        this.users.push(newUser);
        this.loadUsers();
      }
    )
    
  }

  toggleDisplay(){
    this.display = !this.display;
  }

  deleteUser(id:number, index:number){
    if(this.users[index].bookmarks !== undefined || this.users[index].bookmarks.length > 0){
      let bookmarks1: Bookmark[] = this.users[index].bookmarks;

      if(bookmarks1.length > 0 || this.bookmarks !== undefined){
        for(let i = 0; i < this.bookmarks.length; i++){
          this.bookmarkApi.deleteBookmark(bookmarks1[i].id).subscribe(
            () => {
              bookmarks1.splice(index, 1);
            }
          );
        }
      }
    }
    this.userApi.deleteUser(id).subscribe(
      () => {
        //this.tickets.splice(index, 1);
        this.loadUsers();
      }
    );
  }

  fillOutBookmarks(){
    for(let i =0; i < this.users.length; i++){
      //I pass in the full to do array that way we do not need to call the api every time the loop runs 
      this.users[i].bookmarks= this.bookmarkApi.getBookmarkByTicket( this.users[i].id, this.bookmarks);
    }
  }

  selectUser(){
    let index:number = Number ((document.getElementById("userdropdown") as HTMLInputElement).value);

    this.userApi.currentUser = this.users[index];
    this.route.url
    console.log(this.users[index].id)
    this.loadUserBookmarks();
    
  }
  
  loggedInCheck(){
    let index:number = Number ((document.getElementById("userdropdown") as HTMLInputElement).value);
    if(this.users[index].id !== null){
      this.isLoggedIn = true;
    }
    
  }


    
  }



