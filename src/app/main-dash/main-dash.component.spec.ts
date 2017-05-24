import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mainDashComponent } from './main-dash.component';

describe('mainDashComponent', () => {
  let component: mainDashComponent;
  let fixture: ComponentFixture<mainDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mainDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mainDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
