import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallSelectorComponent } from './ball-selector.component';
import { BallsComponent } from '../balls/balls.component';
import { ResultsComponent } from '../results/results.component';
import { ballsArray } from 'src/app/constant/balls';
import { BallsService } from 'src/app/services/balls.service';
import { Ball } from 'src/app/models/ball.model';

describe('BallSelectorComponent', () => {
  let component: BallSelectorComponent;
  let fixture: ComponentFixture<BallSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallSelectorComponent, BallsComponent, ResultsComponent ],
      providers: [ BallsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallSelectorComponent);
    component = fixture.componentInstance;
    component.ballsArray = ballsArray;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove all the items froms array', () => {
    spyOn(component.ballsService, 'clearSelection')
    component.onRemoveAll();
    expect(component.ballsService.clearSelection).toHaveBeenCalled();
  });

  it('should return in addBall', () => {
    const ball: Ball = {
      id: '4',
      color: 'brown',
      selected: true
    }
    component.addBall(ball);
    expect(component.ballsArray[0].id).toBe('1');
  });

  it('should not add a ball to array of balls', () => {
    component.ballsArray = [
      {
        id: '',
        color: 'whiteSmoke',
        selected: false
      }
    ];
    const ball: Ball = {
      id: '4',
      color: 'brown',
      selected: false
    }
    spyOn(component.ballsService, 'addBall').and.returnValue(false);
    component.addBall(ball);
    fixture.detectChanges();
    expect(component.ballsArray[0].id).toBe('');
  });

  it('should add a ball to array of balls', () => {
    const ball: Ball = {
      id: '3',
      color: 'brown',
      selected: false
    }
    spyOn(component.ballsService, 'addBall').and.returnValue(true);
    component.addBall(ball);
    const result = component.ballsArray.find(b => b.id === ball.id);
    expect(result.selected).toBeTruthy();
  });
});
