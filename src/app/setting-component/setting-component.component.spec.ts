import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingComponentComponent } from './setting-component.component';

describe('SettingComponentComponent', () => {
  let component: SettingComponentComponent;
  let fixture: ComponentFixture<SettingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
