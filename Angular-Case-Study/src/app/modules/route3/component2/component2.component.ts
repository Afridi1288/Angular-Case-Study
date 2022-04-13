import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {
  @Input() pausedArray: number[] = []
  @Output() timerEmitter = new EventEmitter<{
    timerLimit: number,
    type: 'start' | 'pause' | 'reset'
  }>()

  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    let timer = (<HTMLInputElement>document.getElementById('timerInput')).value
    if((<HTMLInputElement>document.getElementById('startPauseBtn')).innerText == 'Start') {
      this.timerEmitter.emit({
        timerLimit: Number(timer),
        type: 'start'
      });
      (<HTMLInputElement>document.getElementById('startPauseBtn')).innerText = 'Pause'
    } else {
      this.timerEmitter.emit({
        timerLimit: Number(timer),
        type: 'pause'
      });
      (<HTMLInputElement>document.getElementById('startPauseBtn')).innerText = 'Start'
    }

  }

  resetTimer() {
    this.timerEmitter.emit({
      timerLimit: 0,
      type: 'reset'
    })
  }

}
