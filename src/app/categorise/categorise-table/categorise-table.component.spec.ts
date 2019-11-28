import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriseTableComponent } from './categorise-table.component';

describe('CategoriseListComponent', () => {
  let component: CategoriseTableComponent;
  let fixture: ComponentFixture<CategoriseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriseTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
