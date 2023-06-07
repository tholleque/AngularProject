import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  url:string = "https://localhost:7094/api/Tickets/";
  constructor(private http:HttpClient) { }

  getAllTickets():Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.url);
  }
}
