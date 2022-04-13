import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Route3Component } from './route3.component';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: Route3Component  
  }
]


@NgModule({
  declarations: [
    Route3Component,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class Route3Module { }
