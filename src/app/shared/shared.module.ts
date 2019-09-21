import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sqrt } from './sqrt.pipe';
import { elisp } from './elisp.pipe';
import { democomponent } from './democomponent.component';
import { child } from './child.component';
import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';
import { customdirective } from './customdirective.directive';
import { BhagyshriComponent } from './component/bhagyshri.component';

@NgModule({
  declarations: [
    sqrt,
    elisp,
    democomponent ,
    child,
    customdirective,
    BhagyshriComponent
  ],
  imports: [
  
  ],
  exports:[
    CommonModule,
    sqrt,
    elisp,
    democomponent,
    child,customdirective
  ]
})
export class SharedModule { }
