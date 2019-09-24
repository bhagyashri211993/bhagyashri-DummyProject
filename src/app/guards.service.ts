import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardsService implements CanActivate{
 
  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   let activeUrl=state.url;
   let activeUser=localStorage.getItem('activeuser');
   console.log(activeUrl,activeUser);

   
   if(activeUrl=="/log-in" && !activeUser )
   {  
      return true;

   }
  else if(activeUrl="/dashboard/panel" && activeUser )
   {
    // this.router.navigate(['/dashboard/panel']);
          return true;
   }
   

   else
   {
     alert("active user not found");
     this.router.navigate(['/log-in']);
    //  return false;
   }
   
    // if(!activeUser)
    // {
    //   return true;
    // }
    // else{
    //   return false;

    // }
  }

  constructor(private router:Router) { }
 
}
