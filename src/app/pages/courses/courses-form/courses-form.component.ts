import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private readonly courseService: CoursesService,
    private _snackbar: MatSnackBar,
    private readonly router: Router,
  ) {

  }

  ngOnInit(): void {
  }

  onSubmit(){
    // if(this.form){

    // }
    this.courseService.saveCourse(this.form.value).subscribe(
      res => this.onSuccess(),
      error => this.onError()
    );
  }

  onCancel(){
    //TODO CANCEL
  }

  private onSuccess(){
    this._snackbar.open('Curso salvo com sucesso!', 'Fechar', {duration: 5000})
    this.router.navigate(['/courses']);
  }

  private onError(){
    this._snackbar.open('Error ao salvar o curso!', 'Fechar', {duration: 5000})
  }
}
