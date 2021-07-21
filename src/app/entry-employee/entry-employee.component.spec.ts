import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryEmployeeComponent } from './entry-employee.component';

describe('EntryEmployeeComponent', () => {
  let component: EntryEmployeeComponent;
  let fixture: ComponentFixture<EntryEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
