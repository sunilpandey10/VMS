import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditregisterComponentComponent } from './editregister-component.component';

describe('EditregisterComponentComponent', () => {
  let component: EditregisterComponentComponent;
  let fixture: ComponentFixture<EditregisterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditregisterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditregisterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
