import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetSlipComponent } from './bet-slip.component';
import { BallsComponent } from '../balls/balls.component';
import { BallsService } from 'src/app/services/balls.service';

describe('BetSlipComponent', () => {
  let component: BetSlipComponent;
  let fixture: ComponentFixture<BetSlipComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetSlipComponent, BallsComponent ],
      providers: [ BallsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not accept the bet', () => {
    component.onCalculateBet('3');
    expect(component.error).toBeTruthy();
  });

  it('should accept and calculate the bet', () => {
    component.onCalculateBet('10');
    expect(component.error).toBeFalsy();
  });

  it('should not generateRandom number because of bet', () => {
    spyOn(component.ballsService, 'generateRandom');
    component.bet = 4;
    component.onBet();
    expect(component.ballsService.generateRandom).not.toHaveBeenCalled();
  });

  it('should generateRandom number to get the winner', () => {
    spyOn(component.ballsService, 'generateRandom');
    component.bet = 15;
    component.onBet();
    expect(component.ballsService.generateRandom).toHaveBeenCalled();
  });
});
