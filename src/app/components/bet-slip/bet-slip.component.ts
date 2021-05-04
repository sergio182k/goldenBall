import { Component } from '@angular/core';
import { BallsService } from 'src/app/services/balls.service';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent {
  bet = 0;
  error = false;

  constructor(public ballsService: BallsService) { }

  onCalculateBet(value: string) {
    if(+value <= 5) {
      this.error = true;
    } else {
      this.error = false;
      this.bet = +value * this.ballsService.balls.length;
    }
  }

  onBet() {
    if(this.bet <= 5) return;
    this.ballsService.generateRandom();
  }

}
