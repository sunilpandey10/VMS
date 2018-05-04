import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailsComponentComponent } from './client-details-component.component';

describe('ClientDetailsComponentComponent', () => {
  let component: ClientDetailsComponentComponent;
  let fixture: ComponentFixture<ClientDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
