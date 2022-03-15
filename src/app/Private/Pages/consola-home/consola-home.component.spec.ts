import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolaHomeComponent } from './consola-home.component';

describe('ConsolaHomeComponent', () => {
  let component: ConsolaHomeComponent;
  let fixture: ComponentFixture<ConsolaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsolaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
