import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
  ],
  declarations: [],
  providers: [],
})
export class SharedModule { }
