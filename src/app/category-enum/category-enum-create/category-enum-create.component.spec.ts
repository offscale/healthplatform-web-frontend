import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CategoryEnumCreateComponent } from './category-enum-create.component';

describe('CategoryEnumCreateComponent', () => {
  let component: CategoryEnumCreateComponent;
  let fixture: ComponentFixture<CategoryEnumCreateComponent>;

  beforeEach(waitForAsync(() => {
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
