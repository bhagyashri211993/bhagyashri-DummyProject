import { Directive, ElementRef } from "@angular/core";

@Directive({
selector:'[setColor]',
})
export class customdirective
{
   constructor(ele:ElementRef)
   {
      console.log(ele) ;
      ele.nativeElement.style.backgroundColor="red";
      ele.nativeElement.style.color="white";

   }
}