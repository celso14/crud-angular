import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/shared/view-components/confirm-dialog/confirm-dialog.component';
import { Course } from 'src/app/core/interfaces/course.interface';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit{

  @Input()
  courses: Course[] = [];

  @Output()
  add = new EventEmitter<boolean>();

  @Output()
  edit = new EventEmitter<Course>();

  @Output()
  delete = new EventEmitter<{result: boolean, id: number}>();

  readonly displayedColumns: string[] = ['name', 'category', 'actions'];

  constructor(
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
  }

  onAdd(){
    this.add.emit(true);
  }

  onEdit(course: Course){
    this.edit.emit(course);
  }

  onDelete(id: number){
    this.dialog.open(ConfirmDialogComponent, {data: "Você quer deletar esse curso?"})
    .afterClosed().subscribe(result => this.delete.emit({result, id}));
  }
}
