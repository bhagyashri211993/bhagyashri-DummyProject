import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixedLayoutComponent } from './dashboard/fixed-layout/fixed-layout.component';
import { PagenotfoundComponent } from './shared/component/pagenotfound/pagenotfound.component';
import { GuardsService } from './guards.service';


const routes: Routes = [
  {
    path: '', redirectTo: 'log-in', pathMatch: 'full'
  },
  
  {
    path: 'log-in', loadChildren: "./authentication/authentication.module#AuthenticationModule",
   canActivate:[GuardsService] 
   },
  {
    path: 'dashboard', component: FixedLayoutComponent,
   canActivate:[GuardsService] ,
    
    children: [{
    //   path: '', loadChildren: "./authentication/authentication.module#AuthenticationModule"
    // },
    // {
    //   path: '', loadChildren: "./authentication/authentication.module#AuthenticationModule"
    // },

    // {

      path:'',loadChildren:"./shared/shared.module#SharedModule",
   canActivate:[GuardsService] 

    }
    ],

    
  },
  {
    path: '**', redirectTo: 'pagenotfound', pathMatch: 'full'
  },

  {
    path: 'pagenotfound', component: PagenotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
