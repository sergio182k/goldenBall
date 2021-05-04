import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ballsArray } from 'src/app/constant/balls';

import { BetSlipComponent } from './bet-slip.component';

fdescribe('BetSlipComponent', () => {
  let component: BetSlipComponent;
  let fixture: ComponentFixture<BetSlipComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetSlipComponent ]
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
});
