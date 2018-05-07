import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertcomponentComponent } from './alertcomponent.component';

describe('AlertcomponentComponent', () => {
  let component: AlertcomponentComponent;
  let fixture: ComponentFixture<AlertcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
