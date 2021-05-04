import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallsComponent } from './balls.component';
import { ballsArray } from 'src/app/constant/balls';

describe('BallsComponent', () => {
  let component: BallsComponent;
  let fixture: ComponentFixture<BallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ballsArray = ballsArray;
    expect(component).toBeTruthy();
  });
});
