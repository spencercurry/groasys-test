import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlRecipeListComponent } from './control-recipe-list.component';

describe('ControlRecipeListComponent', () => {
  let component: ControlRecipeListComponent;
  let fixture: ComponentFixture<ControlRecipeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlRecipeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
