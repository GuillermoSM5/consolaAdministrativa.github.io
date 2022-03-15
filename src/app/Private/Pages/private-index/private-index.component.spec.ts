import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateIndexComponent } from './private-index.component';

describe('PrivateIndexComponent', () => {
  let component: PrivateIndexComponent;
  let fixture: ComponentFixture<PrivateIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
