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
    this.ticketService.addTicket(newTicket).subscribe(() => {
      this.ticketAdded.emit(); // Emit the event when a new ticket is added
      this.newTicket = {} as Ticket;
    });
  }
}
