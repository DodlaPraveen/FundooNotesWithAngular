import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(value: any, args?: any) :  any {
    if(!args ){
      return value;
    }else{
      args=args.toLocaleLowerCase();
    }
    return value.filter((note: any)=>{
      return note.title.toLocaleLowerCase().includes(args) |  note.title.toLocaleLowerCase().includes(args);
    })
  }

}
