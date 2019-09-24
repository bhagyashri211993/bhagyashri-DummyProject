import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  logout()
  {
    let activeUser=localStorage.getItem('activeuser');
    if(activeUser)
    {
      localStorage.removeItem('activeuser');
      this.router.navigate(['/log-in']);
    }
  }

}
