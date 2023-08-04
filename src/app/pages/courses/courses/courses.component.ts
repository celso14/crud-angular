import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  displayedColumns: string[] = ['name', 'category',];
  courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'Front-End'},
    {_id: '2', name: 'React', category: 'Front-End'},
    {_id: '3', name: 'Vue', category: 'Front-End'},
    {_id: '4', name: 'Laravel', category: 'Back-End'},
    {_id: '5', name: 'Django', category: 'Back-End'},
    {_id: '6', name: 'PHP', category: 'Back-End'},
    {_id: '7', name: 'Java', category: 'Back-End'},
    {_id: '8', name: 'C++', category: 'Games'},
    {_id: '9', name: 'C#', category: 'Back-End'},
    {_id: '10', name: 'Python', category: 'ML'},
  ];

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
