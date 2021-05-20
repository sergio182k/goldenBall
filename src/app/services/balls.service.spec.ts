import { ballsArray } from 'src/app/constant/balls';
import { TestBed } from '@angular/core/testing';


import { BallsService } from './balls.service';
import { skip } from 'rxjs/operators';

describe('BallsService', () => {
  let service: BallsService;

  beforeEach(() => {
    service = new BallsService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not add Ball', () => {
    service.balls = ballsArray;
    const result = service.addBall(ballsArray[0]);
    expect(result).toBeFalsy();
  });

  it('should add Ball', () => {
    const result = service.addBall(ballsArray[0]);
    expect(result).toBeTruthy();
  });

  it('should clear selection', () => {
    service.balls = ballsArray;
    service.clearSelection();
    expect(service.balls.length).toBe(0);
  });

  it('should add Ball', () => {
    service.randomNumber.pipe(skip(1)).subscribe((value) => {
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(10);
    })
    service.generateRandom();
  });
});
