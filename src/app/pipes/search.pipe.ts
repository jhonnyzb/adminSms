import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], arg: string): any[] {
    if(!value) return null;
    if(!arg) return value;
    arg = arg.toLocaleLowerCase();
    return value.filter(function(item:any){
      return JSON.stringify(item).toLocaleLowerCase().includes(arg)
    });
  }

}
