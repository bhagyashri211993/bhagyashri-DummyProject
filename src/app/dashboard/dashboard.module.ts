import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedLayoutComponent } from './fixed-layout/fixed-layout.component';
import { PanelComponent } from './panel/panel.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FixedLayoutComponent, PanelComponent],
  imports: [
    CommonModule,
    AuthenticationModule,
    RouterModule
  ],
  exports:
  [FixedLayoutComponent, PanelComponent]
})
export class DashboardModule { }
