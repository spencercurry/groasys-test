import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlRecipeItemComponent } from './control-recipe-item.component';

describe('ControlRecipeItemComponent', () => {
  let component: ControlRecipeItemComponent;
  let fixture: ComponentFixture<ControlRecipeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlRecipeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlRecipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
