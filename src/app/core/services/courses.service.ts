import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, first, take, tap } from 'rxjs';
import { Course } from 'src/app/shared/interfaces/course.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/course.json';

  constructor(private readonly httpClient: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API).pipe(
      // take(1),
      first(),
      // delay(1000)
    );
  }
}
