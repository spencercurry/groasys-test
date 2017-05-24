import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { controlDashComponent } from './control-dash.component';

describe('controlDashComponent', () => {
  let component: controlDashComponent;
  let fixture: ComponentFixture<controlDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ controlDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(controlDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
