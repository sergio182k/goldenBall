import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsComponent } from './results.component';
import { Ball } from 'src/app/models/ball.model';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check result', () => {
    const ball: Ball = {
      id: '4',
      color: 'brown',
      selected: true
    }
    spyOnProperty(component.ballsService, "balls", "get").and.returnValue([ball]);
    const result = component.checkResult(ball);
    expect(result).toBeTruthy();
  });
});
