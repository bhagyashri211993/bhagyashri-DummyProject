import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes, Router, RouterModule } from '@angular/router';

const routes:Routes=[
  {
<<<<<<< HEAD
    path:'sign-in',component:LoginComponent
=======
    path:'log-in',component:LoginComponent
>>>>>>> df34d9e3d12a9826233d5efb72f98f06562fb7b4
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
