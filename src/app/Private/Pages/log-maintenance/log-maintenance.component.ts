import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-log-maintenance',
  templateUrl: './log-maintenance.component.html',
  styleUrls: ['./log-maintenance.component.scss'],
})
export class LogMaintenanceComponent implements OnInit {
  formFilter = this.fb.group({
    id: [''],
    startDate: [],
    endDate: [],
  });
  constructor(private fb: FormBuilder, private datePipe: DatePipe) {}

  search() {
    console.log({
      ...this.formFilter.value,
      startDate: new Date(this.formFilter.value.startDate),
      endDate: new Date(this.formFilter.value.endDate),
    });
  }
  ngOnInit(): void {}
}
