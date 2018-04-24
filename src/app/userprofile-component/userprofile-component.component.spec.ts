import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileComponentComponent } from './userprofile-component.component';

describe('UserprofileComponentComponent', () => {
  let component: UserprofileComponentComponent;
  let fixture: ComponentFixture<UserprofileComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofileComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
