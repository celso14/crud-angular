import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getCourses(): Course[] {
    return [
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
  }
}
