import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriseCreateComponent } from './categorise-create.component';

describe('CategoriseCreateComponent', () => {
  let component: CategoriseCreateComponent;
  let fixture: ComponentFixture<CategoriseCreateComponent>;

  beforeEach(async(() => {
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
