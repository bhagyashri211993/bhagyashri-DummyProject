import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { sideItems } from '../../sideItems';


@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent implements OnInit {
public items;
public roleOfUser;
    
  constructor(private service:ServiceService) { 
    this.items=sideItems;
 
    // console.log(this.role);
    // console.log(this.items.children);
  }

  ngOnInit() {
  }


  setAdmin()
  {
    this.roleOfUser="ADMIN";
    this.service.role=this.roleOfUser;
    console.log(this.service.role);
  }


  setUser()
  {
    this.roleOfUser="user";
    console.log(this.roleOfUser);
    this.service.role=this.roleOfUser;
    
    console.log(this.service.role);
  }




}
