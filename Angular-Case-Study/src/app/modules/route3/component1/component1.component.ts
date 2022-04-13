import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit, OnChanges {
  @Input() timerLimit = 0
  timer: any
  constructor() { }

  ngOnChanges(simpleChange: any) {
    // clearInterval(this.timer)
    // this.startTimer()
  }
  ngOnInit(): void {
  }

  startTimer() {

    this.timer = setInterval(() => {
      if(this.timerLimit>0)
        this.timerLimit--
    }, 1000)
  }

}
