import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BallComponent } from './ball/ball.component';
import { BallsComponent } from './balls/balls.component';
import { BallSelectorComponent } from './ball-selector/ball-selector.component';
import { BetSlipComponent } from './bet-slip/bet-slip.component';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    BallComponent,
    BallsComponent,
    BallSelectorComponent,
    BetSlipComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BallComponent,
    BallsComponent,
    BallSelectorComponent,
    BetSlipComponent,
    ResultsComponent
  ]
})
export class SharedModule { }
