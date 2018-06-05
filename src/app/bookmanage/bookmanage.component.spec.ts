import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmanageComponent } from './bookmanage.component';

describe('BookmanageComponent', () => {
  let component: BookmanageComponent;
  let fixture: ComponentFixture<BookmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
