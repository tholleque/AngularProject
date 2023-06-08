import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets:Ticket [] = [];
  displayTicket:Ticket = {} as Ticket;
  display:boolean = false;

  constructor(private ticketApi:TicketService){}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(){
    this.ticketApi.getAllTickets().subscribe(
      (result) => {
        this.tickets = result;
      }
    )
  }

  editTicket(t:Ticket, index:number){
    this.ticketApi.displayTicket = t;
    this.display = !this.display;

  }
}
