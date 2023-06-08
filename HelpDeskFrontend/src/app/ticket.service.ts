import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  url:string = "https://localhost:7094/api/Tickets/";
  displayTicket:Ticket = {} as Ticket;
  
  constructor(private http:HttpClient) { }

  getAllTickets():Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.url);
  }

  getTicketById(id:number):Observable<Ticket>{
    return this.http.get<Ticket>(this.url+id);
  }

  updateTicket(newValues:Ticket, id:number){
    newValues.id = id;
    return this.http.put<any>(this.url+id, newValues);
  }
}
