import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CategoryEnumTableComponent } from './category-enum-table.component';

describe('CategoryEnumTableComponent', () => {
  let component: CategoryEnumTableComponent;
  let fixture: ComponentFixture<CategoryEnumTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryEnumTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEnumTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
