import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getAllUsers() {
    return [
      {id: 101, name: 'BILLA', age: 25, city: 'hyderabad', salary: 20000 , dob: new Date('1-08-1993').toJSON() },
      {id: 102, name: 'Prasanna Kumar', age: 24, city: 'kondapoor', salary: 20000 , dob: new Date('08-05-1995').toJSON() },
      {id: 103, name: 'Gajanan', age: 24, city: 'Madapoor', salary: 12000 , dob: new Date('05-05-1996').toJSON() },
      {id: 104, name: 'Ravi Teja', age: 27, city: 'GachchiBowli', salary: 40000 , dob: new Date('02-10-1992').toJSON() }
  ];
  }

}
