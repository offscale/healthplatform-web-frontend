import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriageNextComponent } from './triage-next.component';

describe('TriageNextComponent', () => {
  let component: TriageNextComponent;
  let fixture: ComponentFixture<TriageNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriageNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriageNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
