import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sqrt } from './sqrt.pipe';
import { elisp } from './elisp.pipe';
import { child } from './child.component';
import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';
import { customdirective } from './customdirective.directive';
import { DashboardHeaderComponent } from './component/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './component/dashboard-footer/dashboard-footer.component';
import { DashboardSidebarComponent } from './component/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardPanelComponent } from './component/dashboard-panel/dashboard-panel.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { TransformDataPipe } from './pipe/transform-data.pipe';
import { CustomComponent } from './component/custom/custom.component';


const routes:Routes=[{
    path:'panel',component:DashboardPanelComponent
}];

@NgModule({
  declarations: [
    sqrt,
    elisp,
    child,
    customdirective,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    DashboardSidebarComponent,
    DashboardPanelComponent,
    PagenotfoundComponent,
    TransformDataPipe,
    CustomComponent,
    
  ],
  imports: [
  RouterModule.forChild(routes),
  CommonModule
  
  ],
  exports:[
    
    sqrt,
    elisp,
    child,customdirective,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    DashboardSidebarComponent,
    DashboardPanelComponent,
    PagenotfoundComponent,
    
    
  ]
})
export class SharedModule { }
