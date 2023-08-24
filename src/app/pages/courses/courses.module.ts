import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesFormComponent } from './courses-form/courses-form.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesFormComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ]
})
export class CoursesModule { }
