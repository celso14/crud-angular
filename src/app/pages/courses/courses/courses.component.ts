import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { Course } from 'src/app/shared/interfaces/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  displayedColumns: string[] = ['name', 'category',];
  courses: Course[] = [];

  constructor(
    private readonly courseService: CoursesService
  ) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

}
