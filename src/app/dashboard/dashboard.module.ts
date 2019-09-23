import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedLayoutComponent } from './fixed-layout/fixed-layout.component';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [FixedLayoutComponent],
  imports: [
    CommonModule,
   
    RouterModule,SharedModule
  ],
//   exports:
//   [FixedLayoutComponent, PanelComponent]
})
export class DashboardModule { }
