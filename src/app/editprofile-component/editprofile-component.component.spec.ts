import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofileComponentComponent } from './editprofile-component.component';

describe('EditprofileComponentComponent', () => {
  let component: EditprofileComponentComponent;
  let fixture: ComponentFixture<EditprofileComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofileComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
