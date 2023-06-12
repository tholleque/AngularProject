import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';
import { Bookmark } from '../bookmark';
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  displayTicket: Ticket = {} as Ticket;
  bookmarks: Bookmark[] = [];
  display: boolean[] = [];

  constructor(private ticketApi: TicketService, private bookmarkApi: BookmarkService) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets() {
    this.ticketApi.getAllTickets().subscribe(
      (result) => {
        this.tickets = result;
        this.display.fill(false, 0, result.length);
        this.bookmarkApi.getAllBookmarks().subscribe(
          (result) => {
            this.bookmarks = result;
            this.fillOutBookmarks();
          }
        );
      }
    );
  }

  onTicketAdded() {
    this.loadTickets();
  }

  toggleTicket(t: Ticket, index: number) {
    this.ticketApi.displayTicket = t;
    this.display[index] = !this.display[index];
  }

  deleteTicket(id: number, index: number) {
    if (this.tickets[index].bookmarks !== undefined || this.tickets[index].bookmarks.length > 0) {
      let bookmarks1: Bookmark[] = this.tickets[index].bookmarks;

      if (bookmarks1.length > 0 || this.bookmarks !== undefined) {
        for (let i = 0; i < this.bookmarks.length; i++) {
          this.bookmarkApi.deleteBookmark(bookmarks1[i].id).subscribe(() => {
            bookmarks1.splice(index, 1);
          });
        }
      }
    }

    this.ticketApi.deleteTicket(id).subscribe(() => {
      this.loadTickets();
    });
  }

  fillOutBookmarks() {
    for (let i = 0; i < this.tickets.length; i++) {
      this.tickets[i].bookmarks = this.bookmarkApi.getBookmarkByTicket(this.tickets[i].id, this.bookmarks);
    }
  }
}
