import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilemodalComponentComponent } from './profilemodal-component.component';

describe('ProfilemodalComponentComponent', () => {
  let component: ProfilemodalComponentComponent;
  let fixture: ComponentFixture<ProfilemodalComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilemodalComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilemodalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
