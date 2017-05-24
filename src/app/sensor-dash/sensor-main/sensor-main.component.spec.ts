import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorMainComponent } from './sensor-main.component';

describe('SensorMainComponent', () => {
  let component: SensorMainComponent;
  let fixture: ComponentFixture<SensorMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
