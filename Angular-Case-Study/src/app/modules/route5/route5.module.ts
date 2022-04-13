import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route5Component } from './route5.component';
import { Routes, RouterModule } from '@angular/router';
import {MatSortModule} from '@angular/material/sort';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: Route5Component  
  }
]


@NgModule({
  declarations: [
    Route5Component
  ],
  imports: [
    CommonModule,
    MatSortModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class Route5Module { }
