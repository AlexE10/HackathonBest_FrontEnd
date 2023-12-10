import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { CourseComponent } from './course/course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AuthorPipePipe } from './author-pipe.pipe';
import { MatCardModule } from "@angular/material/card";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    RegisterComponent,
    CourseComponent,
    AddCourseComponent,
    AuthorPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
