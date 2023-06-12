import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Bookmark } from './bookmark';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  
  url:string = "https://localhost:7094/api/Bookmarks/";
  constructor(private http:HttpClient) { }

  getAllBookmarks():Observable<Bookmark[]>{
    return this.http.get<Bookmark[]>(this.url);
  }
  deleteBookmark(id:number){
    return this.http.delete<any>(this.url+id);
  }

  getBookmarkByTicket(ticketId:number, bookmarks:Bookmark[]):any{
    let output:Bookmark[] = [];
    for(let i = 0; i < bookmarks.length; i++){
      if(bookmarks[i].ticketId === ticketId){
        output.push(bookmarks[i]);
      }
    }
    return output;
  }

  getBookmarkByUserId(userId:number, bookmarks:Bookmark[]):any{
    let output:Bookmark[] = [];
    for(let i = 0; i < bookmarks.length; i++){
      if(bookmarks[i].userId === userId){
        output.push(bookmarks[i]);
      }
    }
  }

  createBookmark(userId:number, ticketId:number){
    let newBookmark:Bookmark = {} as Bookmark;
    newBookmark.userId = userId;
    newBookmark.ticketId = ticketId;
    return this.http.post<any>(this.url, newBookmark);
  }
}
