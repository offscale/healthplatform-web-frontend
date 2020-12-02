import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CategoriseComponent } from './categorise.component';

describe('CategoriseComponent', () => {
  let component: CategoriseComponent;
  let fixture: ComponentFixture<CategoriseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
