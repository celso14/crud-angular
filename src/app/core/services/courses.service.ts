import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, first, take, tap } from 'rxjs';
import { Course } from 'src/app/shared/interfaces/course.interface';
import { API_URL } from 'src/env/enviroments';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  private readonly API_ROUTE = `${API_URL}/courses`;

  constructor(private readonly httpClient: HttpClient) {

  }

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API_ROUTE).pipe(
      // take(1),
      first(),
      // delay(1000)
    );
  }

  saveCourse(course: Partial<Course>): Observable<Course>{
    return this.httpClient.post<Course>(this.API_ROUTE, course).pipe(
      first()
    );
  }
}
