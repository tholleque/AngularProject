import { Component, EventEmitter, Output } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent {
  newTicket: Ticket = {} as Ticket;
  @Output() ticketAdded: EventEmitter<void> = new EventEmitter<void>();

  constructor(private ticketService: TicketService) {}

  addTicket(newTicket: Ticket) {
    // Sets the isClosed property of the new ticket to 'false'
    newTicket.isClosed = false;
    // Calls the addTicket method of the ticket service and subscribes to the result
    this.ticketService.addTicket(newTicket).subscribe(() => {
      // Emits the ticketAdded event when a new ticket is added
      this.ticketAdded.emit();
      // Resets the newTicket object to an empty ticket
      this.newTicket = {} as Ticket;
    });
  }
  
}
