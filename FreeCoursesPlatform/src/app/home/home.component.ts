import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../course';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  filteredCourses: Course[] = [];

  constructor(private courseService: CourseService) {
  
  }

  ngOnInit(): void {
    this.courseService.serviceCall();
    this.courseService.getAnnouncements().subscribe(x=>this.filteredCourses=x);
  }
}
