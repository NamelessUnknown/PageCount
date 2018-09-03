import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'radio'
})
export class RadioPipe implements PipeTransform {

  transform(departments: any, model: any): any {
    if(model == "All" || model == undefined) return departments;

    return departments.filter(function(dep){
      if(model == "Supplied"){
        return dep.department == 1;
      }
      else if(model == "Retail"){
        return dep.department == 2;
      }
      else if(model == "Plus"){
        return dep.department == 3;
      }
      else if(model == "Books"){
        return dep.department == 4;
      }
    })
  }
}
