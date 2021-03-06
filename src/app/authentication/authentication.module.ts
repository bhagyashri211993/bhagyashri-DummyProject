import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes, Router, RouterModule } from '@angular/router';

const routes:Routes=[
  {
    path:'',component:LoginComponent
  },
{
  path:'sign-up',component:SignUpComponent
}
];


@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  // exports:[LoginComponent, SignUpComponent]
})
export class AuthenticationModule { }
