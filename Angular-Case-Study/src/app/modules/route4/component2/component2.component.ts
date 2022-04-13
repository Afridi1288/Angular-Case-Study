import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {
  pausedArray: number[] = []
  constructor(
    private timerService: TimerService
  ) { }

  ngOnInit(): void {
    this.timerService.timerSubject.subscribe(
      () => {
        this.pausedArray = this.timerService.pausedArray
      }
    )
  }

  startTimer() {
    let timer = (<HTMLInputElement>document.getElementById('timerInput')).value
    if((<HTMLInputElement>document.getElementById('startPauseBtn')).innerText == 'Start') {
      this.timerService.timerHandler({
        timerLimit: Number(timer),
        type: 'start'
      });
      (<HTMLInputElement>document.getElementById('startPauseBtn')).innerText = 'Pause'
    } else {
      this.timerService.timerHandler({
        timerLimit: Number(timer),
        type: 'pause'
      });
      (<HTMLInputElement>document.getElementById('startPauseBtn')).innerText = 'Start'
    }

  }

  resetTimer() {
    this.timerService.timerHandler({
      timerLimit: 0,
      type: 'reset'
    })
  }

}
