import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerOf'
})
export class PowerOfPipe implements PipeTransform {

  transform(val:number,e:any,exp:any): number
  {
    let ex = parseFloat(exp)
    return Math.pow(val,isNaN(ex) ? 1 : ex);
  }

}
