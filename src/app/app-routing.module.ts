import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BhagyshriComponent } from './shared/component/bhagyshri/bhagyshri.component';
import { PratikshaComponent } from './shared/component/pratiksha/pratiksha.component';
import { FixedLayoutComponent } from './dashboard/fixed-layout/fixed-layout.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  
  {
    path: "dashboard", component: FixedLayoutComponent,

    children: [{
      path: "log-in", loadChildren: "./authentication/authentication.module#AuthenticationModule"
    },
    {
      path: "sign-up", loadChildren: "authenticaton.module#AuthenticationModule"
    }

    ],

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
