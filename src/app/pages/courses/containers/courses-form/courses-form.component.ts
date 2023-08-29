import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Course } from 'src/app/core/interfaces/course.interface';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit{

  form = this.formBuilder.group({
    name: [''],
    category: ['']
  });

  categories = ['Front-End', 'Back-End', 'Full-Stack']

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
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.activatedRoute.queryParams.subscribe((params) => {
          this.isEdit = true;
          this.courseId = params['id'];
          this.form.setValue({
            name: params['name'],
            category: params['category']
          })
        })
      }
    });
  }

  async onSubmit(){
    if(this.isEdit){
      await this.courseService.editCourse(this.courseId, this.form.value).then(
        res => this.onSuccess(),
      )
      .catch(
        error => this.onError()
      )
    }
    else{
      this.courseService.saveCourse(this.form.value).subscribe(
        res => this.onSuccess(),
        error => this.onError()
      );
    }
  }

  onCancel(){
    this.router.navigate(['/courses']);
  }

  private onSuccess(){
    const message = this.isEdit ? 'Curso editado com sucesso!' : 'Curso salvo com sucesso!';
    this._snackbar.open(message, 'Fechar', {duration: 5000})
    this.router.navigate(['/courses']);
  }

  private onError(){
    const message = this.isEdit ? 'Erro ao editar o curso!' : 'Erro ao salvar o curso!';
    this._snackbar.open(message, 'Fechar', {duration: 5000})
  }
}
