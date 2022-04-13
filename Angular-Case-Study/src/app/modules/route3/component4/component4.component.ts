import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.scss']
})
export class Component4Component implements OnInit {
  @Input() startCounter: any = 0;
  @Input() pauseCounter: any = 0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.startCounter);
    console.log(this.pauseCounter);
  }

}
