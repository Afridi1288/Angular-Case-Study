import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route2Component } from './route2.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: Route2Component  
  }
]

@NgModule({
  declarations: [
    Route2Component
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
export class Route2Module { }
