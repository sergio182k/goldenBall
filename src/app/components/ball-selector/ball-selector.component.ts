import { Component, OnInit } from '@angular/core';
import { BallsService } from 'src/app/services/balls.service';
import { ballsArray } from 'src/app/constant/balls';
import { Ball } from 'src/app/models/ball.model';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss']
})
export class BallSelectorComponent implements OnInit {
  ballsArray = ballsArray;

  constructor( public ballsService: BallsService ) { }

  ngOnInit() {
  }

  onRemoveAll() {
    this.ballsArray = ballsArray;
    this.ballsService.clearSelection();
  }

  addBall(ball: Ball) {
    if( ball.selected) return;
    if(this.ballsService.addBall(ball)) {
      this.ballsArray = this.ballsArray.map((item) => ball.id === item.id ? {...ball, selected: true} : item);
    }
  }

}
