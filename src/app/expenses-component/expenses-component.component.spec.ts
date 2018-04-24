import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesComponentComponent } from './expenses-component.component';

describe('ExpensesComponentComponent', () => {
  let component: ExpensesComponentComponent;
  let fixture: ComponentFixture<ExpensesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
