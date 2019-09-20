
import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'sqrt'
})

export class sqrt implements PipeTransform {
  transform(val : number) : number {
     return Math.sqrt(val);
  }
  
  

}
