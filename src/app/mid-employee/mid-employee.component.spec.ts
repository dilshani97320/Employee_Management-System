import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidEmployeeComponent } from './mid-employee.component';

describe('MidEmployeeComponent', () => {
  let component: MidEmployeeComponent;
  let fixture: ComponentFixture<MidEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
