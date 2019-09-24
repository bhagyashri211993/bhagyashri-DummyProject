import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fixed-layout',
  templateUrl: './fixed-layout.component.html',
  styleUrls: ['./fixed-layout.component.css']
})
export class FixedLayoutComponent implements OnInit {

  constructor(private router:Router) { 
   let activeuser= localStorage.getItem('activeuser');
   if(!activeuser)
   {
       router.navigate(['/log-in']);
   }
  }

  ngOnInit() {
  }

}
