import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyexpensescomponentsComponent } from './myexpensescomponents.component';

describe('MyexpensescomponentsComponent', () => {
  let component: MyexpensescomponentsComponent;
  let fixture: ComponentFixture<MyexpensescomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyexpensescomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyexpensescomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
