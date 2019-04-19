import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Course } from './model/course';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  courses: Course[];

  onCourseSelected(course:Course) {
      console.log(course);
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<Course[]>('http://localhost:3000/api/courses').subscribe((courses:Course[]) => this.courses = courses);
  }
  
}
