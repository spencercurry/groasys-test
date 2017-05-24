import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlMainComponent } from './control-main.component';

describe('ControlMainComponent', () => {
  let component: ControlMainComponent;
  let fixture: ComponentFixture<ControlMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
