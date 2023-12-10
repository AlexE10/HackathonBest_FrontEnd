import { Component } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {

  private exitGuard = false;

  course:Course = {
    title: "",
    description: "",
    creator: "",
    categoryId: "",
    duration: "",
    difficulty: ""
  }

  constructor(private courseService: CourseService) {
  }

  addAnnouncement()
  {
    this.courseService.addCourse(this.course);
    this.exitGuard = true;
  }
}
