import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListIngredientsComponent } from './recipe-list-ingredients.component';

describe('RecipeListIngredientsComponent', () => {
  let component: RecipeListIngredientsComponent;
  let fixture: ComponentFixture<RecipeListIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeListIngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
