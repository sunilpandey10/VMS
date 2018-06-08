import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReferencesComponentComponent } from './manage-references-component.component';

describe('ManageReferencesComponentComponent', () => {
  let component: ManageReferencesComponentComponent;
  let fixture: ComponentFixture<ManageReferencesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageReferencesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageReferencesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
