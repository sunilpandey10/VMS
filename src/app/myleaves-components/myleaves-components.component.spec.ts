import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyleavesComponentsComponent } from './myleaves-components.component';

describe('MyleavesComponentsComponent', () => {
  let component: MyleavesComponentsComponent;
  let fixture: ComponentFixture<MyleavesComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyleavesComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyleavesComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
