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
public name='pratiksha';

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
