import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponentComponent } from './report-component.component';

describe('ReportComponentComponent', () => {
  let component: ReportComponentComponent;
  let fixture: ComponentFixture<ReportComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
