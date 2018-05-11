import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLeavesComponentComponent } from './manage-leaves-component.component';

describe('ManageLeavesComponentComponent', () => {
  let component: ManageLeavesComponentComponent;
  let fixture: ComponentFixture<ManageLeavesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLeavesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLeavesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
