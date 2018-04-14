import { EmailService } from './email.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { StudentsComponent } from './students/students.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
