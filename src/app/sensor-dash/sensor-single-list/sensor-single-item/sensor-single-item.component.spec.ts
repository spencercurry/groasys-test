import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorSingleItemComponent } from './sensor-single-item.component';

describe('SensorSingleItemComponent', () => {
  let component: SensorSingleItemComponent;
  let fixture: ComponentFixture<SensorSingleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorSingleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorSingleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
