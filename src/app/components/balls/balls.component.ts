import { grayBalls } from './../../constant/gray-balls';
import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BallsService } from 'src/app/services/balls.service';
import { Ball } from 'src/app/models/ball.model';

@Component({
  selector: 'app-balls',
  templateUrl: './balls.component.html',
  styleUrls: ['./balls.component.scss']
})
export class BallsComponent implements OnChanges {
  @Input() ballsArray: Ball[];
  @Output() ballSelected = new EventEmitter<Ball>();

  constructor(public ballsService: BallsService) { }

  ngOnChanges(changes: SimpleChanges) {
    const currentValue = changes.ballsArray.currentValue;
    if (currentValue.length < 8) {
      this.ballsArray = grayBalls.map( (ball, index) => currentValue[index] || ball);
    }
  };

}
