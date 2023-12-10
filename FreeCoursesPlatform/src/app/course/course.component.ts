import { Component, Input } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

  displayCourse: boolean = true;
  showCourse: boolean = true;

  @Input() course: Course = 
    {
      title : '',
      description : '',
      creator : '',
      categoryId : '',
      duration : '',
      difficulty : ''
    }

    constructor(private courseService: CourseService) {}
}
