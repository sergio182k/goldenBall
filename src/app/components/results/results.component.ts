import { Component, OnInit } from '@angular/core';
import { BallsService } from 'src/app/services/balls.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ball } from 'src/app/models/ball.model';
import { ballsArray } from 'src/app/constant/balls';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  resultBet$: Observable<Ball>;

  constructor(public ballsService: BallsService) { }

  ngOnInit() {
   this.resultBet$ = this.ballsService.randomNumber
    .pipe(
      map((randomNumber) => ballsArray.find(ball => +ball.id === randomNumber) )
    )
  }

  checkResult(result: Ball): boolean {
    return !!this.ballsService.balls.find(ball => ball.id === result.id);
  }

}
