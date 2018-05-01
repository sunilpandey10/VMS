import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyleavemodalComponentComponent } from './applyleavemodal-component.component';

describe('ApplyleavemodalComponentComponent', () => {
  let component: ApplyleavemodalComponentComponent;
  let fixture: ComponentFixture<ApplyleavemodalComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyleavemodalComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyleavemodalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
