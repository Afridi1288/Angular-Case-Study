import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
  timer: any;
  timerLimit: any = 0
  constructor(
    private timerService: TimerService
  ) { }

  ngOnInit(): void {
    this.timerService.timerSubject.subscribe(
      (timerData) => {
        if(timerData.type == 'reset') {
          this.timerLimit = 0;
        } else if (timerData.type == 'pause') {
          this.timerService.pausedArray.push(this.timerLimit);
          clearInterval(this.timer)
        } else {
          if(!this.timerLimit) 
            this.timerLimit = timerData.timerLimit
          this.timer = setInterval(() => {
            if(this.timerLimit>0)
              this.timerLimit--
          }, 1000)
        }
      }
    )
  }

}
