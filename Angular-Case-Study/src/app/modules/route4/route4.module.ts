import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Route4Component } from './route4.component';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { TimerService } from 'src/app/services/timer.service';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: Route4Component  
  }
]


@NgModule({
  declarations: [
    Route4Component,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    TimerService
  ]
})
export class Route4Module { }
