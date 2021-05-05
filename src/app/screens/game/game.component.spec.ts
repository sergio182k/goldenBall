import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { BallSelectorComponent } from 'src/app/components/ball-selector/ball-selector.component';
import { BetSlipComponent } from 'src/app/components/bet-slip/bet-slip.component';
import { BallsComponent } from 'src/app/components/balls/balls.component';
import { ResultsComponent } from 'src/app/components/results/results.component';
import { SharedModule } from 'src/app/components/shared.module';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      imports: [ SharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
