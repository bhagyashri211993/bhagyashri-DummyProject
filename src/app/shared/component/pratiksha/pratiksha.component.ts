import { Component, OnInit } from '@angular/core';
import { BhagyshriComponent } from '../bhagyshri/bhagyshri.component';

@Component({
  selector: 'app-pratiksha',
  templateUrl: './pratiksha.component.html',
  styleUrls: ['./pratiksha.component.css']
})
export class PratikshaComponent implements OnInit {
 public bcomp=new BhagyshriComponent();
 public name;
  constructor() {
    this.display();
   }

  ngOnInit() {
  }


  display()
  {
    this.name=this.bcomp.name
    console.log(this.bcomp.name);
  }

}
