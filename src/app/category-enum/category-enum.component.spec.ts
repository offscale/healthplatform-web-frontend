import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEnumComponent } from './category-enum.component';

describe('CategoryEnumComponent', () => {
  let component: CategoryEnumComponent;
  let fixture: ComponentFixture<CategoryEnumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryEnumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
