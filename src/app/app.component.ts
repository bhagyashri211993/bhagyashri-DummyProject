import { Component, Output, EventEmitter,ViewChild } from '@angular/core';
import {child} from './shared/child.component';
// import { EmitterVisitorContext } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SharedModuledemo';
<<<<<<< HEAD
public name='bhagyashri2';
=======
public name='pratiksha';
>>>>>>> 6a85fb226a7f25156ee8ad09f5ec8ee7fc2d3fed

@ViewChild('childmethod',{static:false}) childmethod: child;
@Output() public passchildvalue=new EventEmitter();
testOutput(val){
  console.log(val)
}
callchildfun()
{
  console.log('i  m in parent function')
  this.childmethod.childfunctioncall();
  // this.childmethod.
}
}
