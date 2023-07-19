import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filternames'
})
export class FilternamesPipe implements PipeTransform {


  transform(value: string[],s:string,_search?:string |any)
  {
    value.filter(val=>{
          return val[_search].toString().toLowerCase().includes(_search)
    })
  }

}
