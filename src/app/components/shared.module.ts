import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BallsComponent } from './balls/balls.component';
import { BallSelectorComponent } from './ball-selector/ball-selector.component';
import { BetSlipComponent } from './bet-slip/bet-slip.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    BallsComponent,
    BallSelectorComponent,
    BetSlipComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BallsComponent,
    BallSelectorComponent,
    BetSlipComponent,
    ResultsComponent
  ]
})
export class SharedModule { }
