import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.scss'],
})
export class QuestionDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { question: string },
    public dialogRef: MatDialogRef<QuestionDialogComponent>
  ) {}

  submit(op: boolean) {
    this.dialogRef.close(op);
  }
  ngOnInit(): void {}
}
