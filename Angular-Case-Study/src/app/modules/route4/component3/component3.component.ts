import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component implements OnInit {
  timeStamps: string[] = []
  constructor(
    private timerService: TimerService
  ) { }

  ngOnInit(): void {
    this.timerService.timerSubject.subscribe(
      (timer) => {
        this.timeStamps = this.timerService.timeStamps
      }
    )
  }

}
