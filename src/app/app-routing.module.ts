import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixedLayoutComponent } from './dashboard/fixed-layout/fixed-layout.component';
import { PagenotfoundComponent } from './shared/component/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'log-in', pathMatch: 'full'
  },
  
  {
    path: 'log-in', loadChildren: "./authentication/authentication.module#AuthenticationModule"

  },
  {
    path: 'dashboard', component: FixedLayoutComponent,

    children: [{
    //   path: '', loadChildren: "./authentication/authentication.module#AuthenticationModule"
    // },
    // {
    //   path: '', loadChildren: "./authentication/authentication.module#AuthenticationModule"
    // },

    // {
      path:'',loadChildren:"./shared/shared.module#SharedModule"
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
