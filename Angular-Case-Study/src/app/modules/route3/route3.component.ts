import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.scss']
})
export class Route3Component implements OnInit {
  timerLimit: any = 0;
  timeStamps: string[] = [];
  timer: any;
  startCounter = 0
  pauseCounter = 0
  pausedArray: number[] = []
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  setTimer(timerData: {timerLimit: number, type: 'start' | 'pause' | 'reset'}) {
    if(timerData.type == 'reset') {
      this.timerLimit = 0;
      this.startCounter = 0;
      this.pauseCounter = 0;
      this.timeStamps = []
      this.pausedArray = []
    } else if (timerData.type == 'pause') {
      if(this.timerLimit)
        this.pausedArray.push(this.timerLimit);
      this.timeStamps.push(('Paused at ' + this.datePipe.transform(new Date(), 'dd-M-yyyy hh:mm:ss a')))
      clearInterval(this.timer)
      this.pauseCounter++
    } else {
      this.startCounter++
      this.timeStamps.push(('Started at ' + this.datePipe.transform(new Date(), 'dd-M-yyyy hh:mm:ss a')))
      if(!this.timerLimit) 
        this.timerLimit = timerData.timerLimit
      this.timer = setInterval(() => {
        if(this.timerLimit>0)
          this.timerLimit--
      }, 1000)
    }
  }

}
