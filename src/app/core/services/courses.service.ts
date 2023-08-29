import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, first, firstValueFrom, retry, take, takeUntil, tap, timeout } from 'rxjs';
import { Course } from 'src/app/core/interfaces/course.interface';
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

  findCourse(id: number): Observable<Course>{
    return this.httpClient.get<Course>(`${this.API_ROUTE}/${id}`)
    .pipe(
      first(),
      timeout(30000),
      retry(3)
    );
  }

  saveCourse(course: Partial<Course>): Observable<Course>{
    return this.httpClient.post<Course>(this.API_ROUTE, course).pipe(
      first()
    );
  }

  editCourse(id:number , course: Partial<Course>): Promise<Course>{
    // firstValueFrom permite tratar um observable como uma promise
    // sempre usar uma promise quando não for receber uma stream de dados
    return firstValueFrom(this.httpClient.put<Course>(`${this.API_ROUTE}/${id}`, course));
  }

  deleteCourse(id: number): Promise<void>{
    return firstValueFrom(this.httpClient.delete<void>(`${this.API_ROUTE}/${id}`));
  }
}
