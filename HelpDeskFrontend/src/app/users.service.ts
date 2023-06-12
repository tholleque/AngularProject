import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url:string = "https://localhost:7094/api/Users/";
  currentUser:User = {} as User;
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
  createUser(newUser:User):Observable<any>{
    return this.http.post<any>(this.url, newUser);
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete<any>(this.url+id);
  }
}
