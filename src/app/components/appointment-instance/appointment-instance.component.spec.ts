import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentInstanceComponent } from './appointment-instance.component';

describe('AppointmentInstanceComponent', () => {
  let component: AppointmentInstanceComponent;
  let fixture: ComponentFixture<AppointmentInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
