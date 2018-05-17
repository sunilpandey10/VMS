import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytimereportcomponentComponent } from './mytimereportcomponent.component';

describe('MytimereportcomponentComponent', () => {
  let component: MytimereportcomponentComponent;
  let fixture: ComponentFixture<MytimereportcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytimereportcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytimereportcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
