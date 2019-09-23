import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixedLayoutComponent } from './fixed-layout/fixed-layout.component';
import { PanelComponent } from './panel/panel.component';


const routes: Routes = [
    {
        path:'',
        component:FixedLayoutComponent
    },
    {
        path:'fixedLayout',
        component:FixedLayoutComponent
    },
    {
        path:'panel',
        component:PanelComponent
    },
    
    ];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    declarations: [FixedLayoutComponent,PanelComponent]
  })
  export class DashboardRotingModule {}