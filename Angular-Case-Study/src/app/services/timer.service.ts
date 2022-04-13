import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timerSubject = new Subject<{
    timerLimit: number,
    type: 'start' | 'pause' | 'reset'
  }>()
  timeStamps: string[] = [];
  startCounter = 0;
  pauseCounter = 0;
  pausedArray: number[] = []
  constructor(
    private datePipe: DatePipe
  ) {}

  timerHandler(timerData: {timerLimit: number, type: 'start' | 'pause' | 'reset'}) {
    if(timerData.type == 'reset') {
      this.startCounter = 0;
      this.pauseCounter = 0;
      this.timeStamps = [];
      this.pausedArray = []
      this.timerSubject.next({timerLimit: 0, type: 'reset'})
    } else if (timerData.type == 'pause') {
      this.pauseCounter++
      this.timeStamps.push(('Paused at ' + this.datePipe.transform(new Date(), 'dd-M-yyyy hh:mm:ss a')))
      this.timerSubject.next({timerLimit: timerData.timerLimit, type: 'pause'})
    } else {
      this.startCounter++
      this.timeStamps.push(('Started at ' + this.datePipe.transform(new Date(), 'dd-M-yyyy hh:mm:ss a')))
      this.timerSubject.next({timerLimit: timerData.timerLimit, type: 'start'})
    }
  }
}
