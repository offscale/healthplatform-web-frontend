import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CategoriseCreateComponent } from './categorise-create.component';

describe('CategoriseCreateComponent', () => {
  let component: CategoriseCreateComponent;
  let fixture: ComponentFixture<CategoriseCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriseCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
