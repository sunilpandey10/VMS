import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamdirectoryComponentComponent } from './teamdirectory-component.component';

describe('TeamdirectoryComponentComponent', () => {
  let component: TeamdirectoryComponentComponent;
  let fixture: ComponentFixture<TeamdirectoryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamdirectoryComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamdirectoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
