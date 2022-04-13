import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route1Component } from './route1.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: Route1Component  
  }
]

@NgModule({
  declarations: [
    Route1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class Route1Module { }
