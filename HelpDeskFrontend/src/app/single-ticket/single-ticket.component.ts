import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';
import { UsersService } from '../users.service';
import { BookmarkService } from '../bookmark.service';
import { Bookmark } from '../bookmark';
import { User } from '../user';

@Component({
  selector: 'app-single-ticket',
  templateUrl: './single-ticket.component.html',
  styleUrls: ['./single-ticket.component.css']
})
export class SingleTicketComponent implements OnInit {

  @Input() bookmark: Bookmark = {} as Bookmark;
  @Output() changed = new EventEmitter<Bookmark>();
  ticket:Ticket = {} as Ticket;
  display:boolean = false;
  currentUser:User = {} as User; 
  
  constructor(private ticketApi:TicketService, private userApi:UsersService, private bookmarkApi:BookmarkService){}

  
  ngOnInit(): void {
    this.loadTicket();
  }

  loadTicket(){
    this.ticket = this.ticketApi.displayTicket;
  }

  toggleDisplay(){
    this.display = !this.display;
  }

 
  doneEditing(){
    this.ticketApi.updateTicket(this.ticket, this.ticket.id).subscribe(
      () => {
        this.toggleDisplay();
        this.ticketApi.displayTicket = this.ticket;
      }
    )
  }

  addBookmark(userId:number, ticketId:number){
    this.bookmark.userId = userId;
    this.bookmark.ticketId = ticketId;
    this.bookmarkApi.createBookmark(this.bookmark.userId, this.bookmark.ticketId).subscribe(
      () => {
        this.changed.emit(this.bookmark);
      }
    )
  }

  
  
}
