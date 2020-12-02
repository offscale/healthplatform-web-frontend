import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TriageNextComponent } from './triage-next.component';

describe('TriageNextComponent', () => {
  let component: TriageNextComponent;
  let fixture: ComponentFixture<TriageNextComponent>;

  beforeEach(waitForAsync(() => {
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
