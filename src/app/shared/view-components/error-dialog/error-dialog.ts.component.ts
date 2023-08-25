import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog.ts',
  templateUrl: './error-dialog.ts.component.html',
  styleUrls: ['./error-dialog.ts.component.scss']
})
export class ErrorDialogTsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}) { }
}
