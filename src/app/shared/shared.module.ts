import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { CommonModule } from "@angular/common";
import { ErrorDialogTsComponent } from './view-components/error-dialog/error-dialog.ts.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ConfirmDialogComponent } from './view-components/confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    ErrorDialogTsComponent,
    ReactiveFormsModule
  ],
  declarations: [
    ErrorDialogTsComponent,
    ConfirmDialogComponent
  ],
  providers: [],
})
export class SharedModule { }
