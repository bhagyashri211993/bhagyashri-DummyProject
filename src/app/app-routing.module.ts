import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BhagyshriComponent } from './shared/component/bhagyshri/bhagyshri.component';
import { PratikshaComponent } from './shared/component/pratiksha/pratiksha.component';


const routes: Routes = [
//   {
//   path: '', redirectTo: 'home', pathMatch: 'full'
// },

// {
//   path: "pratiksha", component: PratikshaComponent
// },
// {
//   path: "home", component: HomeComponent,

//   children: [{
//     path: "bhagyashri", component: BhagyshriComponent
//   }],

// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
