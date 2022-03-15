import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InenctavidadComponent } from './inenctavidad.component';

describe('InenctavidadComponent', () => {
  let component: InenctavidadComponent;
  let fixture: ComponentFixture<InenctavidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InenctavidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InenctavidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
