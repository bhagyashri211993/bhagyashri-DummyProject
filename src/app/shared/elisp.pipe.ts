import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'elisp'
})

export class elisp implements PipeTransform {
  transform(val : string)  {
     if(val.length>=20)
     {
        let newstring=val.slice(0,10)+"...";
        console.log(newstring);
        return newstring;
     }
     else
     return val;
  }
  
  

}
