import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { CommonModule } from "@angular/common";
import { ErrorDialogTsComponent } from './components/error-dialog/error-dialog.ts.component';
import { CategoryPipe } from './pipes/category.pipe';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    ErrorDialogTsComponent,
    CategoryPipe,
    ReactiveFormsModule
  ],
  declarations: [
    ErrorDialogTsComponent,
    CategoryPipe
  ],
  providers: [],
})
export class SharedModule { }
