import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEnumCreateComponent } from './category-enum-create.component';

describe('CategoryEnumCreateComponent', () => {
  let component: CategoryEnumCreateComponent;
  let fixture: ComponentFixture<CategoryEnumCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryEnumCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEnumCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
