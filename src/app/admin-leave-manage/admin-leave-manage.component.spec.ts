import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeaveManageComponent } from './admin-leave-manage.component';

describe('AdminLeaveManageComponent', () => {
  let component: AdminLeaveManageComponent;
  let fixture: ComponentFixture<AdminLeaveManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLeaveManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLeaveManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
