import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeaveModalComponent } from './admin-leave-modal.component';

describe('AdminLeaveModalComponent', () => {
  let component: AdminLeaveModalComponent;
  let fixture: ComponentFixture<AdminLeaveModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLeaveModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLeaveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
