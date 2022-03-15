import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableConsultasComponent } from './table-consultas.component';

describe('TableConsultasComponent', () => {
  let component: TableConsultasComponent;
  let fixture: ComponentFixture<TableConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableConsultasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
