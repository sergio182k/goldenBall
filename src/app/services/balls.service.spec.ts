import { ballsArray } from 'src/app/constant/balls';
import { TestBed } from '@angular/core/testing';


import { BallsService } from './balls.service';

describe('BallsService', () => {
  let service: BallsService;

  beforeEach(() => {
    service = new BallsService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add Ball', () => {
    service.balls = ballsArray;
    const result = service.addBall(ballsArray[0]);
    expect(result).toBeFalsy();
  });

  it('should add Ball', () => {
    const result = service.addBall(ballsArray[0]);
    expect(result).toBeTruthy();
  });
});
