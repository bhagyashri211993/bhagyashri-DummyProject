import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedLayoutComponent } from './fixed-layout/fixed-layout.component';
import { PanelComponent } from './panel/panel.component';



@NgModule({
  declarations: [FixedLayoutComponent, PanelComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
