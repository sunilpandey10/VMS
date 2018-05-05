import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotFoundcomponentComponent } from './pagenot-foundcomponent.component';

describe('PagenotFoundcomponentComponent', () => {
  let component: PagenotFoundcomponentComponent;
  let fixture: ComponentFixture<PagenotFoundcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenotFoundcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotFoundcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
