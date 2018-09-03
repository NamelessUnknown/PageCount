import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any, clue: any): any {
    if(!clue) return users;

    return users.filter(function(user){
      return user.name.toLowerCase().includes(clue.toLowerCase()) || user.surname.toLowerCase().includes(clue.toLowerCase());
    })
  }

}
