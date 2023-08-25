import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './containers/courses/courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesFormComponent } from './containers/courses-form/courses-form.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesFormComponent,
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class CoursesModule { }
