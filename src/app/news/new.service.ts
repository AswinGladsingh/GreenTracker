// news.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Event {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your actual API

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }
}
