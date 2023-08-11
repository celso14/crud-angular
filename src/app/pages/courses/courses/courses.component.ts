import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { CoursesService } from 'src/app/core/services/courses.service';
import { ErrorDialogTsComponent } from 'src/app/shared/components/error-dialog/error-dialog.ts.component';
import { Course } from 'src/app/shared/interfaces/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category'];
  courses$: Observable<Course[]>;

  constructor(
    private readonly courseService: CoursesService,
    public dialog: MatDialog
    ) {
    this.courses$ = this.courseService.getCourses()
    .pipe(
      catchError(error => {
        this.onError('Error ao carregar cursos.')
        return of([]);
      })
    );
  }

  ngOnInit(): void {}

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogTsComponent, {
      data: errorMessage
    })
  }
}
