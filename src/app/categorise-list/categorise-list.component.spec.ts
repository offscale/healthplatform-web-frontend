import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriseListComponent } from './categorise-list.component';

describe('CategoriseListComponent', () => {
  let component: CategoriseListComponent;
  let fixture: ComponentFixture<CategoriseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
