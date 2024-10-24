import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Leader {
  id: number;
  name: string;
  position: string;
  rewardPoints: number;
  tier: string;
}

@Injectable({
  providedIn: 'root'
})
export class LeadershipBoardService {
  private apiUrl = 'https://your-api-url.com/leadershipboard'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getLeadershipBoard(): Observable<Leader[]> {
    return this.http.get<Leader[]>(this.apiUrl);
  }
}
