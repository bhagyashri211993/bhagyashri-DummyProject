import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'transformData'
})
export class TransformDataPipe implements PipeTransform {

  transform(sideItems : any, ...args: any[]): any {
    return null;
  }

}
