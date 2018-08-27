import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <div style="position:relative;left:250px; top:15px;">
    <span>{{date | date:'short' }}</span>
    </div>
    <div style="position:relative;left:250px; top:50px;">
    <style>
    table, td, tr, th {
      border: 1px solid black;
    }
    </style>
    <table style="border:1px solid black;">
    <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Salary</th>
          <th>Date of Birth</th>
    </tr>
    <tr *ngFor="let user of users">
    <td>{{user.id}}</td><td>{{user.name}}</td><td>{{user.dob | age }}</td><td>{{user.city}}</td><td>{{user.salary}}</td><td><span>{{user.dob | date:"dd/MM/yyyy" }}</span></td>
    </tr>
    </table>
    </div>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  users: any[];
  public date = new Date();
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers();
  }

}
