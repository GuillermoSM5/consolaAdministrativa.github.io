import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-print-error',
  templateUrl: './print-error.component.html',
  styleUrls: ['./print-error.component.scss'],
})
export class PrintErrorComponent implements OnInit {
  @Input() errors: any = {};
  @Input() control: AbstractControl = {} as AbstractControl;
  errorsKeys: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.errorsKeys = Object.keys(this.errors);
  }
}
