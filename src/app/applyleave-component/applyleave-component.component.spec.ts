import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyleaveComponentComponent } from './applyleave-component.component';

describe('ApplyleaveComponentComponent', () => {
  let component: ApplyleaveComponentComponent;
  let fixture: ComponentFixture<ApplyleaveComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyleaveComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyleaveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
