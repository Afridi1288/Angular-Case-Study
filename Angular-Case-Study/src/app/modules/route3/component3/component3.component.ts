import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component implements OnInit {
  @Input() timeStamps: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.timeStamps)
  }

}
