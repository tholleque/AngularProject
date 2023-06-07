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

  constructor(private ticketApi:TicketService){}

  ngOnInit(): void {
    this.ticketApi.getAllTickets().subscribe(
      (result) => {
        this.tickets = result;
      }
    )
  }
}
