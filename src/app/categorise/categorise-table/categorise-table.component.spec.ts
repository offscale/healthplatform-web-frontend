import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CategoriseTableComponent } from './categorise-table.component';

describe('CategoriseListComponent', () => {
  let component: CategoriseTableComponent;
  let fixture: ComponentFixture<CategoriseTableComponent>;

  beforeEach(waitForAsync(() => {
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
