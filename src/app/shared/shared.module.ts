import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { CommonModule } from "@angular/common";
import { ErrorDialogTsComponent } from './components/error-dialog/error-dialog.ts.component';
import { CategoryPipe } from './pipes/category.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    ErrorDialogTsComponent,
    CategoryPipe
  ],
  declarations: [
    ErrorDialogTsComponent,
    CategoryPipe
  ],
  providers: [],
})
export class SharedModule { }
