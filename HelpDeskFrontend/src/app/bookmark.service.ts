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
}
