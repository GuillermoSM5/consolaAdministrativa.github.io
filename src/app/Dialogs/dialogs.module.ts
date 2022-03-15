import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MatButtonModule } from '@angular/material/button';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { SuccessDialogComponent } from './succes-dialog/success-dialog.component';
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';



@NgModule({
  declarations: [SuccessDialogComponent, ErrorDialogComponent, QuestionDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatButtonModule
  ]
})
export class DialogsModule { }
