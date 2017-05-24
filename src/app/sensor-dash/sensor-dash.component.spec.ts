import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { sensorDashComponent } from './sensor-dash.component';

describe('sensorDashComponent', () => {
  let component: sensorDashComponent;
  let fixture: ComponentFixture<sensorDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sensorDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sensorDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
