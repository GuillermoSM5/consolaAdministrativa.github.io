import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-consultas',
  templateUrl: './table-consultas.component.html',
  styleUrls: ['./table-consultas.component.scss'],
})
export class TableConsultasComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() data: any[] = [];
  @Input() displayedColumns: string[] = [];
  dataSource: any;
  constructor() {
    this.dataSource = new MatTableDataSource<any>(this.data);
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {}
}
