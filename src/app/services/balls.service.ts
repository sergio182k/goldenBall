import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ball } from '../models/ball.model';


@Injectable({
  providedIn: 'root'
})
export class BallsService {

  private readonly _randomNumber = new BehaviorSubject<number>(undefined);
  private readonly _ballsArraySelected = new BehaviorSubject<Ball[]>([]);
  readonly ballsArraySelected$ = this._ballsArraySelected.asObservable();

  get balls(): Ball[] {
    return this._ballsArraySelected.getValue();
  }

  set balls(val: Ball[]) {
    this._ballsArraySelected.next(val);
  }

  get randomNumber(): Observable<number> {
    return this._randomNumber.asObservable();
  }

  addBall(ball: Ball): boolean {
    if(this.balls.length >= 8) return false;
    this.balls = [
      ...this.balls,
      ball
    ];
    return true
  }

  clearSelection(): void{
    this.balls = [];
  }

  generateRandom(): void {
    this._randomNumber.next(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  }




}
