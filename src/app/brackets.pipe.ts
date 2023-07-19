import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brackets'
})
export class BracketsPipe implements PipeTransform {

  transform(value:string, z:boolean=true): string
   {
     if(value === '')
      return ''

    if(z)
      return "      [ "  +  value +  " ]"

    return "( " + value  +  " )"
  }

}
