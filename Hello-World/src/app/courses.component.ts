import { EmailService } from './email.service';
import { CoursesService } from './courses.service';

import {Component} from '@angular/core'

@Component({
    selector:'courses',
    template:`<h2>{{ title }}</h2>
    <h4>{{ getTitle() }}</h4>
    <h6>{{ email }}</h6>
    <ul>
    <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    `
})
export class CoursesComponent{
    title = "Prasanna kumar"
   // courses=["java",".Net","Angular","JQuery","Python"];
   courses;
   email;

   constructor(service:CoursesService, emailService:EmailService){
       //let courseService = new CoursesService();
       this.courses=service.getCourses();
       this.email=emailService.getEmail();
   }

    getTitle(){
        return "List of courses";
    }
}