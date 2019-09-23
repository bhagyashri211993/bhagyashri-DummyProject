import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sqrt } from './sqrt.pipe';
import { elisp } from './elisp.pipe';
import { child } from './child.component';
import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';
import { customdirective } from './customdirective.directive';
import { BhagyshriComponent } from './component/bhagyshri/bhagyshri.component'
import { PratikshaComponent } from './component/pratiksha/pratiksha.component';

@NgModule({
  declarations: [
    sqrt,
    elisp,
    child,
    customdirective,
    BhagyshriComponent,
    PratikshaComponent
  ],
  imports: [
  
  ],
  exports:[
    CommonModule,
    sqrt,
    elisp,
    child,customdirective,
    BhagyshriComponent,
    PratikshaComponent
  ]
})
export class SharedModule { }
