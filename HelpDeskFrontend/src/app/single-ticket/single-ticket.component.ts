import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-single-ticket',
  templateUrl: './single-ticket.component.html',
  styleUrls: ['./single-ticket.component.css']
})
export class SingleTicketComponent implements OnInit {

  ticket:Ticket = {} as Ticket;
  display:boolean = false;
  constructor(private ticketApi:TicketService){}

  
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
    );
  }

}
