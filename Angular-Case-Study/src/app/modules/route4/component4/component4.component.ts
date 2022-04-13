import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.scss']
})
export class Component4Component implements OnInit {
  startCounter = 0;
  pauseCounter = 0;
  constructor(
    private timerService: TimerService
  ) { }

  ngOnInit(): void {
    this.timerService.timerSubject.subscribe(
      ()=>{
        this.startCounter = this.timerService.startCounter
        this.pauseCounter = this.timerService.pauseCounter
      }
    )
  }

}
