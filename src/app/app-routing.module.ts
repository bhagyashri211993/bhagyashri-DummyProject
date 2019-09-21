import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BhagyshriComponent } from './shared/component/bhagyshri/bhagyshri.component';
import { PratikshaComponent } from './shared/component/pratiksha/pratiksha.component';


const routes: Routes = [
  {path:"bhagyashri", component:BhagyshriComponent
  },
  {
    path:"pratiksha",component:PratikshaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
