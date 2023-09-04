import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Course } from 'src/app/core/interfaces/course.interface';
import { Lesson } from 'src/app/core/interfaces/lesson.interface';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {

  form!: FormGroup;

  // form = this.formBuilder.group({
  //   name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
  //   category: ['', [Validators.required]]
  // });

  categories = ['Front-End', 'Back-End']

  isEdit: boolean = false;
  courseId: number = 0;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private readonly courseService: CoursesService,
    private _snackbar: MatSnackBar,
    private readonly router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      category: ['', [Validators.required]],
      lessons: this.formBuilder.array([])
    });

    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.activatedRoute.queryParams.subscribe((queryParams) => {
          this.isEdit = true;
          this.courseId = queryParams['id'];
          const course: Course = {
            id: queryParams['id'],
            name: queryParams['name'],
            category: queryParams['category'],
            lessons: queryParams['lessons']
          }
          this.form.setValue({
            name: queryParams['name'],
            category: queryParams['category'],
            lessons: this.retriveLessons(course)
          })
          console.log(this.form.value)
        })
      }
    });
  }

  private retriveLessons(course: Course) {
    const lessons = [];

    if(course?.lessons){
      course.lessons.forEach(lesson => lessons.push(this.createLessonForm(lesson)));
    }
    else{
      lessons.push(this.createLessonForm);
    }

    return lessons;
  }

  private createLessonForm(lesson: Lesson = {id: null, name: '', ytUrl: ''}): FormGroup {
    return this.formBuilder.group({
      id: [lesson.id],
      name: [lesson.name, Validators.required],
      ytUrl: [lesson.ytUrl, Validators.required]
    });
  }

  async onSubmit() {
    if (this.isEdit) {
      await this.courseService.editCourse(this.courseId, this.form.value).then(
        res => this.onSuccess(),
      )
        .catch(
          error => this.onError()
        )
    }
    else {
      this.courseService.saveCourse(this.form.value).subscribe(
        res => this.onSuccess(),
        error => this.onError()
      );
    }
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }

  private onSuccess() {
    const message = this.isEdit ? 'Curso editado com sucesso!' : 'Curso salvo com sucesso!';
    this._snackbar.open(message, 'Fechar', { duration: 5000 })
    this.router.navigate(['/courses']);
  }

  private onError() {
    const message = this.isEdit ? 'Erro ao editar o curso!' : 'Erro ao salvar o curso!';
    this._snackbar.open(message, 'Fechar', { duration: 5000 })
  }
}
