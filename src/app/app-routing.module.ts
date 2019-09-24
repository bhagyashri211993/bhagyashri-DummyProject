import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixedLayoutComponent } from './dashboard/fixed-layout/fixed-layout.component';
import { PagenotfoundComponent } from './shared/component/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  
  {
    path: 'dashboard', component: FixedLayoutComponent,

    children: [{
      path: '', loadChildren: "./authentication/authentication.module#AuthenticationModule"
    },
    {
      path: '', loadChildren: "./authentication/authentication.module#AuthenticationModule"
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
