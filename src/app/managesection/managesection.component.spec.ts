import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesectionComponent } from './managesection.component';

describe('ManagesectionComponent', () => {
  let component: ManagesectionComponent;
  let fixture: ComponentFixture<ManagesectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
