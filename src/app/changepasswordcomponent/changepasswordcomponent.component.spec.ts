import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordcomponentComponent } from './changepasswordcomponent.component';

describe('ChangepasswordcomponentComponent', () => {
  let component: ChangepasswordcomponentComponent;
  let fixture: ComponentFixture<ChangepasswordcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepasswordcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
