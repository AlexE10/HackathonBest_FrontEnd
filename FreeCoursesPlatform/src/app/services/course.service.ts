import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Course } from '../course';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly baseURL = "https://localhost:7049/Course/all-courses";
  private readonly baseURL2 = "https://localhost:7049/Course/add-course";


  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private httpClient:HttpClient) { }

  serviceCall(): void {
    console.log("Service was called");
   }

  getAnnouncements(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.baseURL, this.httpOptions);
  }
  addCourse(course:Course)
  {
    this.httpClient.post<Course>(this.baseURL2, course, this.httpOptions).subscribe();
  }
}
