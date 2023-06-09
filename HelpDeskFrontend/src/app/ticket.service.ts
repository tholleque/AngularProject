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

  deleteTicket(id:number):Observable<any>{
    return this.http.delete<any>(this.url+id);
  }

  addTicket(newTicket: Ticket): Observable<any> {
    //Sends an HTTP POST request to the URL with new ticket object as the request body
    return this.http.post<any>(this.url, newTicket);
  }
}
