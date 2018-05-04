import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmployeeComponentComponent } from './manage-employee-component.component';

describe('ManageEmployeeComponentComponent', () => {
  let component: ManageEmployeeComponentComponent;
  let fixture: ComponentFixture<ManageEmployeeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEmployeeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmployeeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
