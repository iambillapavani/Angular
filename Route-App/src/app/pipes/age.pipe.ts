import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let currentYear: any = new Date().getFullYear();
    console.log(currentYear);
    let userBirthYear: any = new Date(value).getFullYear();
    console.log(userBirthYear);
    let userAge: Number =  currentYear - userBirthYear;
    console.log(userAge);
    return userAge;
  }

}
