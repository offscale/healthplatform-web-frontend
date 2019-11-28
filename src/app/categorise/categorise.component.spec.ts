import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriseComponent } from './categorise.component';

describe('CategoriseComponent', () => {
  let component: CategoriseComponent;
  let fixture: ComponentFixture<CategoriseComponent>;

  beforeEach(async(() => {
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
