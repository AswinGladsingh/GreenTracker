import { Component, OnInit } from '@angular/core';
import { LeadershipBoardService, Leader } from '../leadershipboard/leadershipboard.service'; // Adjust the path as necessary

@Component({
  selector: 'app-leadershipboard',
  templateUrl: './leadershipboard.component.html',
  styleUrls: ['./leadershipboard.component.css']
})
export class LeadershipBoardComponent implements OnInit {
  leaders: Leader[] = [];

  constructor(private leadershipBoardService: LeadershipBoardService) {}

  ngOnInit(): void {
    this.loadLeadershipBoard();
  }

  loadLeadershipBoard(): void {
    this.leadershipBoardService.getLeadershipBoard().subscribe(
      (data: Leader[]) => {
        this.leaders = data;
      },
      (error) => {
        console.error('Error fetching leadership board data', error);
      }
    );
  }
}
