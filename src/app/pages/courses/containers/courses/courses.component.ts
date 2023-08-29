import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { CoursesService } from 'src/app/core/services/courses.service';
import { ErrorDialogTsComponent } from 'src/app/shared/view-components/error-dialog/error-dialog.ts.component';
import { Course } from 'src/app/core/interfaces/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category', 'actions'];
  courses$: Observable<Course[]>;

  constructor(
    private readonly courseService: CoursesService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
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

  ngOnInit(): void {
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogTsComponent, {
      data: errorMessage
    })
  }

  onAdd(){
    // aqui estou pegando a rota que já estou e agregando para a nova rota
    this.router.navigate(['new'], {relativeTo: this.activatedRoute});
  }

  async onDelete(event: any){
    console.log(event)
    if(event.result){
      try {
        await this.courseService.deleteCourse(event.id)
      }
      catch {
        this.onError("Erro ao deletar um curso!");
      }
    }
  }

  onEdit(course: Course){
    console.log(course)
    this.router.navigate(['courses/edit/', course.id], {queryParams: course});
  }
}
