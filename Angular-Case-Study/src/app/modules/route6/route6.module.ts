import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route6Component } from './route6.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: Route6Component  
  }
]


@NgModule({
  declarations: [
    Route6Component
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
export class Route6Module { }
