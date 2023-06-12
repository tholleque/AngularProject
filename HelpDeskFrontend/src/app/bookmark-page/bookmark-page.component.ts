
import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../bookmark.service';
import { Bookmark } from '../bookmark';
import { User } from '../user';
import { TicketService } from '../ticket.service';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-bookmark-page',
  templateUrl: './bookmark-page.component.html',
  styleUrls: ['./bookmark-page.component.css']
})

export class BookmarkPageComponent implements OnInit {

  userBookmarks:Bookmark[] = [];
  currentUser:User = {} as User;
  isLoggedIn: boolean = false;
  constructor(private bookmarkApi:BookmarkService, private ticketApi:TicketService, 
    private userApi:UsersService){}

  ngOnInit():void{
    this.loadUserBookmarks();
  }

  loggedInCheck(){
    if(this.userApi.currentUser.id !== undefined){
      this.isLoggedIn = true;
    }
  }
  loadUserBookmarks(){
    this.bookmarkApi.getBookmarkByUserId(this.userApi.currentUser.id, this.userBookmarks).subscribe(
      (result: Bookmark[]) => {
        this.userBookmarks = result;
      }
    )
  }
}
