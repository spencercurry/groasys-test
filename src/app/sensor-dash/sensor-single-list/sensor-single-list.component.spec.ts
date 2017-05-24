import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorSingleListComponent } from './sensor-single-list.component';

describe('SensorSingleListComponent', () => {
  let component: SensorSingleListComponent;
  let fixture: ComponentFixture<SensorSingleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorSingleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorSingleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
