import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsLeaveComponent } from './employee-details-leave.component';

describe('EmployeeDetailsLeaveComponent', () => {
  let component: EmployeeDetailsLeaveComponent;
  let fixture: ComponentFixture<EmployeeDetailsLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
